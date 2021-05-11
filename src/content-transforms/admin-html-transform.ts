import { ContentTransform, RequestContext, RequestResult } from "maishu-node-mvc";
import stream = require("stream");
import * as HTMLParser from "node-html-parser";
import { getMyConnection } from "../decoders";
import { HtmlSnippet, StoreDomain, StoreInfo } from "../entities";
import * as url from "url";
import * as querystring from "querystring";
import { IncomingMessage } from "http";

export class AdminHtmlTransform implements ContentTransform {
    async execute(result: RequestResult, context: RequestContext): Promise<RequestResult> {
        let contentType = result.headers == null ? "" : result.headers["content-type"] || result.headers["Content-Type"] || "";
        if (contentType.indexOf("html") < 0) {
            return result;
        }


        let domain = context.req.headers.host.split(":").shift();
        let conn = await getMyConnection();
        let storeDomain = await conn.getRepository(StoreDomain).findOne({ domain });
        if (!storeDomain) {
            return result;
        }

        let html = await this.contentToString(result.content);
        let htmlElement = HTMLParser.parse(html);

        let script = new HTMLParser.HTMLElement("script", {}, "", null);
        htmlElement.appendChild(script);

        script.innerHTML = script.innerHTML + `window["application-id"]='${storeDomain.applicationId}';\r\n`;

        result.content = htmlElement.toString();

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
