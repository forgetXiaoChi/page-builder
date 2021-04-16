import * as path from "path";
import { startServer, Settings as MVCSettings } from "maishu-node-mvc";
import { getVirtualPaths } from "maishu-admin-scaffold";
import { ConnectionOptions, createConnection } from "maishu-node-data";
import websiteConfig from "./static/website-config";
import { sourceVirtualPaths } from "maishu-chitu-scaffold";
import { HtmlTransform } from "./content-transforms/html-transform";
import { createRouter } from "maishu-router";
import { pathConcat } from "maishu-toolkit";
import * as querystring from "querystring";
import { getMyConnection } from "./decoders";
import { PageRecord, StoreInfo } from "./entities";
import { IncomingMessage } from "http";

interface Settings {
    port: number,
    // componentStations: { [key: string]: string },
    imageHost: string,
    db: ConnectionOptions,
    menuItems?: MenuItem[],
}

export function start(settings: Settings) {

    let { imageHost, port, db } = settings;

    createConnection(db);

    let contextData: ContextData = {
        db,
        menuItem: settings.menuItems || []
    };

    let virtualPaths = getVirtualPaths("/static", path.join(__dirname, "../src/static"));

    let sv = sourceVirtualPaths(__dirname);
    virtualPaths = Object.assign(sv, virtualPaths);

    virtualPaths["/static/node_modules"] = path.join(__dirname, "../node_modules");
    virtualPaths["/static/content"] = path.join(__dirname, "../content");
    virtualPaths["/static/modules/content"] = path.join(__dirname, "../content/modules");
    for (let themeName in websiteConfig.componentStations) {
        virtualPaths[`/static/modules/${themeName}-page-edit.js`] = path.join(__dirname, "static/modules/pc-page-edit.js");
    }

    let proxy: MVCSettings["proxy"] = {};
    proxy["^/ueditor/net/upload/(\\S*)"] = `http://${imageHost}/Images/upload/$1`;
    let componentStations = websiteConfig.componentStations || {};
    for (let c in componentStations) {
        proxy[`^/${c}/(\\S*)`] = `${componentStations[c]}/$1`;
    }

    proxy[`^/share/(\\S*)`] = `${websiteConfig.componentShare}/$1`;

    let mvcSettings: MVCSettings = {
        port,
        contextData,
        websiteDirectory: __dirname,
        virtualPaths,
        proxy
    }

    startServer(mvcSettings, "mvc");

    let storeServer = startServer({
        port: port + 1,
        websiteDirectory: __dirname,
        virtualPaths,
        proxy,
        urlRewrite: (rawUrl, { req }) => {
            return storeUrlRewrite(rawUrl, req);
        }
    })
    storeServer.contentTransforms.push(new HtmlTransform());
}

const AppName = "application-id";
const pageNames = ["account", "checkout", "login", "home", "login", "order-detail", "product", "product-list",
    "receipt-edit", "receipt-list", "search", "shopping-cart"];

async function storeUrlRewrite(rawUrl: string, req: IncomingMessage) {

    let queryIndex = rawUrl.indexOf("?");
    let query: string | null = null;
    let pathname: string = rawUrl;
    if (queryIndex >= 0) {
        query = rawUrl.substr(queryIndex + 1);
        pathname = rawUrl.substr(0, queryIndex);
    }

    let router1 = createRouter("/:id/?productId/*filePath", {
        id: /[0-9A-Fa-f\-]{36}/,
        productId: /[0-9A-Fa-f\-]{36}/,
        filePath: /[0-9A-Za-z\-_\/\.]/,
    });

    let nameRegex = new RegExp(pageNames.join("|"));
    let router2 = createRouter("/:name/?productId/*filePath", {
        name: nameRegex,
        productId: /[0-9A-Fa-f\-]{36}/,
        filePath: /[0-9A-Za-z\-_\/\.]/,
    });


    let m: { [key: string]: string } | null = null;
    if (rawUrl == "/")
        m = { name: "home" };

    if (m == null)
        m = router1.match(pathname);

    if (m == null)
        m = router2.match(pathname);

    if (!m) {
        return null;
    }

    if (query != null) {
        let obj = querystring.parse(query);
        m = Object.assign(obj || {}, m);
    }

    if (m.filePath)
        return pathConcat("/", m.filePath);

    if (m.id == null && m.name != null) {
        let conn = await getMyConnection();
        let storeInfos = conn.getRepository(StoreInfo);
        let pageRecords = conn.getRepository(PageRecord);

        let host = (req.headers["original-host"] || req.headers["delete-host"]) as string;
        if (host) {
            let storeInfo = await storeInfos.findOne({ domain: host });
            if (storeInfo != null) {
                m[AppName] = storeInfo.id;
            }
        }

        let appId = m[AppName];
        if (!appId)
            throw new Error("Application id is null or empty.");

        let pageRecord = await pageRecords.findOne({ name: m.name, applicationId: appId });
        if (pageRecord == null)
            throw new Error(`Page record with name '${m.name}' and applicationId '${appId}' is not exists.`);

        m.id = pageRecord.id;
    }

    let q = Object.keys(m).filter(o => m[o] != null).map(o => `${o}=${m[o]}`).join('&');
    let u = `/preview.html?${q}`;
    return u;

}




