
import { Application } from "maishu-chitu-react";
import { pathConcat } from "maishu-toolkit";
import w from "../website-config";
import { LocalService } from "../services";
import { FooterComponentData, HeaderComponentData, PageHelper } from "../controls/page-helper";
import { PageData } from "maishu-jueying-core";
import { createRouter } from "maishu-router";

let routers = [
    createRouter("/:id/:productId", { productId: /[0-9A-Fa-f\-]{36}/ })
]

type WebsiteConfig = typeof w;

// location.href = "http://192.168.2.195:5217/7bbfa36c-8115-47ad-8d47-9e52b58e7efd/6a9f7e44-5554-baf3-31f9-9823387342c7/0964cb3b-1cd4-4894-830e-1b154b8bbf05";
class MyApplication extends Application {

    private req: Function;

    constructor(config: any, req: Function) {
        super(config);

        this.req = req;
        this.pageCreated.add((app, page) => {
            console.log(page.data.id);

            let s = new LocalService();
            if (page.data.id)
                s.getPageRecord(page.data.id).then(r => {
                    let header = PageHelper.findHeader(r.pageData);
                    let footer = PageHelper.findFooter(r.pageData);
                    let elementId = "_" + (r.pageData as PageData).id.split("-").join("");
                    createStyleElement(elementId, header, footer);
                })
        })
    }

    async loadjs(path: string) {
        return new Promise<any>((reslove, reject) => {
            this.req([path],
                function (result: any) {
                    reslove(result);
                },
                function (err: Error) {
                    reject(err);
                });


        });
    }

    run() {
        let url: string = window["actualUrl"] || location.href;
        let queryIndex = url.indexOf("?");
        let query = url.substr(queryIndex);
        this.showPage("page" + query);
    }

}

function createStyleElement(elementId: string, header: HeaderComponentData, footer: FooterComponentData) {
    if (!document.getElementById(elementId) && document.head != null) {
        let element = document.createElement('style');
        element.type = 'text/css';
        element.id = elementId;
        document.head.appendChild(element);
        if (header?.props?.height) {
            element.innerHTML = element.innerHTML + `
    #${elementId} .body {
        padding-top: ${header?.props?.height ? header.props.height + "px" : 'unset'}
    }`
        }

        if (footer?.props?.height) {
            element.innerHTML = element.innerHTML + `
    #${elementId} .body {
        padding-bottom: ${footer?.props?.height ? footer.props.height + "px" : 'unset'}
    }`
        }
    }

}

export function run(config: any, req) {
    window["app"] = window["app"] || new MyApplication(config, req)
    return window["app"];
}
