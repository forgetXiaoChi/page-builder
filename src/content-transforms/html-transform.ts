import { ContentTransform, RequestContext, RequestResult } from "maishu-node-mvc";
import stream = require("stream");
import * as HTMLParser from "node-html-parser";
import { getMyConnection } from "../decoders";
import { StoreInfo } from "../entities";
import * as url from "url";
import * as querystring from "querystring";

export class HtmlTransform implements ContentTransform {
    async execute(result: RequestResult, context: RequestContext): Promise<RequestResult> {
        let contentType = result.headers == null ? "" : result.headers["content-type"] || result.headers["Content-Type"] || "";
        if (contentType.indexOf("html") < 0) {
            return result;
        }

        let u = url.parse(context.url);
        if (u.pathname != "preview.html" && u.pathname != "/preview.html")
            return result;

        let html = await this.contentToString(result.content);
        let htmlElement = HTMLParser.parse(html);
        console.assert(htmlElement != null);
        let headElement = htmlElement.querySelector("head");
        if (headElement == null) {
            headElement = new HTMLParser.HTMLElement("head", {}, "", null);
            htmlElement.appendChild(headElement);
        }

        let script = new HTMLParser.HTMLElement("script", {}, "", null);
        headElement.appendChild(script);

        script.innerHTML = script.innerHTML + `window["actualUrl"]='${context.url}';\r\n`;

        let conn = await getMyConnection();
        let storeInfos = conn.getRepository(StoreInfo);
        let storeDomain = await storeInfos.findOne({ domain: context.req.headers.host || "" });
        let applicationId: string | null = null;
        if (storeDomain) {
            script.innerHTML = script.innerHTML + `window["storeDomain"]='${storeDomain.domain}';\r\n`;
            applicationId = storeDomain.id;
        }
        else {
            let u = url.parse(context.url);
            let q = querystring.parse(u.query);
            applicationId = q.applicationId as string || q["application-id"] as string;
        }

        if (!applicationId) {
            result.content = "Can not get application id.";
        }
        else {
            script.innerHTML = script.innerHTML + `window["applicationId"]='${applicationId}';\r\n`;
            result.content = htmlElement.toString();
        }


        return result;
    }

    private async contentToString(content: RequestResult["content"]) {
        return new Promise<string>((resolve, reject) => {
            if (content instanceof stream.Readable) {
                let buffer = Buffer.from([]);
                content.on("data", (data) => {
                    buffer = Buffer.concat([buffer, data])
                })
                content.on("end", function () {
                    resolve(buffer.toString())
                })
                content.on("error", function (err) {
                    reject(err);
                })
            }
            else if (typeof content == "string") {
                resolve(content)
            }
            else {
                resolve(content.toString());
            }
        })
    }
}