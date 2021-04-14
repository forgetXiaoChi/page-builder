
import { Application } from "maishu-chitu-react";
import { pathConcat } from "maishu-toolkit";
import w from "../website-config";
import { LocalService } from "../services";
import { FooterComponentData, HeaderComponentData, PageHelper } from "../controls/page-helper";
import { PageData } from "maishu-jueying-core";

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

    private siteRequireJS = {};

    async loadjs(path: string) {

        if (path.startsWith("modules//")) {
            path = path.substr("modules//".length);
            let arr = path.split("/");
            console.assert(arr.length >= 2);
            let sitePath = arr.shift();
            if (!this.siteRequireJS[sitePath]) {
                let websiteConfig = await this.getWebsiteConfig(sitePath);
                this.siteRequireJS[sitePath] = this.configRequirejs(websiteConfig, sitePath);
            }

            let newPath = `modules/${arr.join('/')}`;
            return new Promise((resolve, reject) => {
                this.siteRequireJS[sitePath]([newPath],
                    mod => {
                        resolve(mod)
                    },
                    err => {
                        reject(err)
                    }
                );
            })
        }

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

    private getWebsiteConfig(sitePath: string) {
        return new Promise<WebsiteConfig>((resolve, reject) => {
            let websiteConfigPath = pathConcat(sitePath, "website-config.js");
            this.req([websiteConfigPath], mod => {
                resolve(mod.default || mod);
            }, err => {
                reject(err);
            })
        })
    }

    private configRequirejs(stationWebsiteConfig: WebsiteConfig, sitePath: string) {
        stationWebsiteConfig.requirejs = stationWebsiteConfig.requirejs || { paths: {} };
        stationWebsiteConfig.requirejs.paths = stationWebsiteConfig.requirejs.paths || {};
        stationWebsiteConfig.requirejs["context"] = sitePath;
        stationWebsiteConfig.requirejs["baseUrl"] = sitePath;

        let req = requirejs.config(stationWebsiteConfig.requirejs);
        return req;
    }

    // parseUrl(url: string) {
    //     let pathname: string;
    //     if (url.startsWith("http")) {
    //         let a = document.createElement("a");
    //         a.href = url;
    //         pathname = a.pathname;
    //     }
    //     else {
    //         pathname = url;
    //     }

    //     if (pathname[0] != "/")
    //         pathname = "/" + pathname;

    //     let keys = Object.keys(w.routers);
    //     for (let i = 0; i < keys.length; i++) {
    //         let p = new UrlPattern(keys[i]);
    //         let m = p.match(pathname);
    //         if (m) {
    //             m = Object.assign(m, w.routers[keys[i]]);
    //             if (!m.pageName)
    //                 throw new Error("Router parse result is not contains pageName.");

    //             let pageName = Array.isArray(m.pageName) ? (m.pageName as string[]).join("/") : m.pageName;
    //             delete m.pageName;

    //             if (m.appId) {
    //                 Service.headers["application-id"] = m.appId;
    //             }

    //             return { pageName, values: m };
    //         }
    //     }



    //     return super.parseUrl(url);
    // }

    // run() {
    //     let url = window["actualUrl"] || location.href;
    //     this.showPage(url);
    // }

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
