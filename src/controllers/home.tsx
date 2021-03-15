import { action, contextData, routeData } from "maishu-node-mvc";
import { ContentResult, controller, ServerContext, serverContext } from "maishu-nws-mvc";
import { connection, currentAppId } from "../decoders";
import { Connection, Like } from "maishu-node-data";
import { errors } from "../static/errors";
import { PageRecord, StoreInfo } from "../entities";
import { renderToString } from "react-dom/server";

import websiteConfig from "../static/website-config";
import * as React from "react";

import { Preview } from "../static/preview-page";
import * as path from "path";

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
            storeInfo = { id: appId, theme: d.themeName };
            await storeInfos.insert(storeInfo);
        }
        else {
            await storeInfos.update(appId, { theme: d.themeName });
        }

        return { id: storeInfo.id };
    }

    @action("/get-theme")
    async getTheme(@currentAppId appId: string, @connection conn: Connection) {
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
            storeInfo = { id: appId, theme: DefaultTheme };
            storeInfos.insert(storeInfo);
        }

        return storeInfo;
    }

    @action("*.html")
    async temp(@serverContext ctx: ServerContext) {


        let modulePath = ctx.virtualPath.substr(0, ctx.virtualPath.length - ".html".length);
        modulePath = path.join("../pages", modulePath);

        let mod = require(modulePath);
        if (mod == null)
            throw errors.loadModuleFail(modulePath);

        if (mod.default == null) {
            throw errors.moduleNotExport(modulePath, "default");
        }

        let element = React.createElement(mod.default, {});
        let r = renderToString(element);
        return new ContentResult(r, { "content-type": "text/html" });
    }

}