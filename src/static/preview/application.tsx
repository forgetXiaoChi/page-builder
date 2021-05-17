
import { Application } from "maishu-chitu-react";
import w from "../website-config";
import { LocalService } from "../services";
import { PageHelper } from "../controls/page-helper";
import { PageData } from "maishu-jueying-core";
import React = require("react");
import { routers } from "../routers";
import { Action } from "maishu-chitu";
import ReactDOM = require("react-dom");
import strings from "../strings";

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
                    // createStyleElement(elementId, header, footer);
                })
        })

        this.pageShown.add(() => {

        })

        window.onpopstate = (event: PopStateEvent) => {
            // alert(`location: ${document.location}, state: ${JSON.stringify(event.state)}`)
            this.showPage(document.location.href);
        }
    }

    createPageElement(pageName: string, containerName: string) {
        let element = super.createPageElement(pageName, containerName);
        element.className = "page";
        ReactDOM.render(<div className="text-center" style={{ paddingTop: 200, paddingBottom: 200 }}>
            <i className="fa fa-spinner fa-spin" />
            <span>
                {strings.pageLoading}
            </span>
        </div>, element);
        return element;
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

    parseUrl(url: string) {

        let a = document.createElement("a");
        a.href = url;
        let pathname = a.pathname;
        if (pathname == "/") {
            pathname = "/home";
        }
        let m: { [name: string]: string } | null = null;
        let values: any = {};
        for (let i = 0; i < routers.length; i++) {
            m = routers[i].match(pathname);
            if (m) {
                values = Object.assign({}, m);
                if (a.search && a.search.length > 1) {
                    let query = this.pareeUrlQuery(a.search.substr(1));
                    Object.assign(values, query)
                }

                break;
            }
        }
        if (m == null)
            throw new Error("Parse url fail.");

        return { pageName: "page", values };
    }


}


export function run(config: any, req) {
    window["app"] = window["app"] || new MyApplication(config, req)
    return window["app"];
}


window["createRuntimeElement"] = function (type: any, props?: any, ...children: any[]) {
    if (type == "a") {
        props = props || {};

        let app = window["app"] as MyApplication;

        if (props.href) {
            let href = props.href;
            delete props.href;
            props.onClick = function (e) {
                e.preventDefault();
                window.history.pushState({}, "", href);
                app.showPage(href);

            } as React.MouseEventHandler<HTMLAnchorElement>;
        }

    }


    return React.createElement(type, props, ...children);
};