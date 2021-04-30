import { action, contextData, routeData } from "maishu-node-mvc";
import { controller } from "maishu-nws-mvc";
import { connection, currentAppId } from "../decoders";
import { Connection, } from "maishu-node-data";
import { errors } from "../static/errors";
import { PageRecord, StoreInfo } from "../entities";

import websiteConfig from "../static/website-config";
import { config } from "config";
import * as http from "http";
import * as vm from "vm";
import concat = require("concat-stream");
import { guid, pathConcat } from "maishu-toolkit";
import * as fs from "fs";

type WebsiteConfig = typeof websiteConfig;

const DefaultTheme: keyof WebsiteConfig["componentStations"] = "aixpi";

@controller("/")
export class HomeController {

    @action("/menu-items")
    menuItems(@contextData cd: ContextData) {
        return cd.menuItem;
    }

    @action("/set-theme")
    async setTheme(@currentAppId appId: string, @connection conn: Connection, @routeData d: { themeName: string }) {
        if (!appId) throw errors.argumentNull("appId");
        if (!d.themeName) throw errors.routeDataFieldNull("themeName");

        let storeInfos = conn.getRepository(StoreInfo);
        let storeInfo = await storeInfos.findOne(appId);
        if (storeInfo == null) {
            // storeInfo = { id: appId, theme: d.themeName };
            // await storeInfos.insert(storeInfo);
            throw errors.objectNotExists("StoreInfo", appId);
        }

        await storeInfos.update(appId, { theme: d.themeName });
        return { id: storeInfo.id };
    }

    @action("/get-theme")
    async getTheme(@currentAppId appId: string, @connection conn: Connection, @routeData d?: { appId?: string }) {
        if (!appId) throw errors.argumentNull("appId");

        let storeInfo = await this.getStoreInfo(appId, conn);
        return storeInfo.theme;
    }

    @action("/get-pages")
    async getPages(@currentAppId appId: string, @connection conn: Connection) {
        if (!conn) throw errors.argumentNull("conn");

        let themeName = await this.getTheme(appId, conn);
        let pageRecords = conn.getRepository(PageRecord);
        let r = await pageRecords.find({ themeName });
        return r;
    }

    async getStoreInfo(appId: string, @connection conn: Connection) {
        if (!appId) throw errors.argumentNull("appId");
        if (!conn) throw errors.argumentNull("conn");

        let storeInfos = conn.getRepository(StoreInfo);
        let storeInfo = await storeInfos.findOne(appId);
        if (storeInfo == null) {
            // storeInfo = { id: appId, theme: DefaultTheme };
            // storeInfos.insert(storeInfo);
            throw errors.objectNotExists("StoreInfo", appId);
        }

        return storeInfo;
    }

    @action("/preview/:id")
    async preview(@routeData d: { id: string }, @connection conn: Connection) {
        let pageRecords = conn.getRepository(PageRecord);
        let pageRecord = await pageRecords.findOne(d.id);
        let pageData = pageRecord.pageData;
        let websiteConfigURL = `http://192.168.2.195:5218/aixpi/website-config.cmd.js`;
        // let bodyComponents = pageData.children.filter(o => o.parentId == "page-body");
        // bodyComponents.forEach(c => {

        // })

    }

    // /** 处理 html 请求 */
    // @action("*.html")
    // async html(@serverContext ctx: ServerContext) {


    //     let modulePath = ctx.virtualPath.substr(0, ctx.virtualPath.length - ".html".length);
    //     modulePath = path.join("../pages", modulePath);

    //     let mod = require(modulePath);
    //     if (mod == null)
    //         throw errors.loadModuleFail(modulePath);

    //     if (mod.default == null) {
    //         throw errors.moduleNotExport(modulePath, "default");
    //     }

    //     let element = React.createElement(mod.default, {});
    //     let r = renderToString(element);
    //     return new ContentResult(r, { "content-type": "text/html" });
    // }

}