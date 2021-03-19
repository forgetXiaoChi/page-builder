import * as path from "path";
import { startServer, Settings as MVCSettings } from "maishu-node-mvc";
import { getVirtualPaths } from "maishu-admin-scaffold";
import { ConnectionOptions, createConnection } from "maishu-node-data";
import websiteConfig from "./static/website-config";

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
    // share: `http://127.0.0.1:6739/share`
    proxy[`^/share/(\\S*)`] = websiteConfig.componentShare;


    let mvcSettings: MVCSettings = {
        port,
        contextData,
        websiteDirectory: __dirname,
        virtualPaths,
        proxy,
    }

    let server = startServer(mvcSettings, "mvc");
}


