import * as path from "path";
import { startServer, Settings as MVCSettings } from "maishu-node-mvc";
import { getVirtualPaths } from "maishu-admin-scaffold";
import { ConnectionOptions, createConnection } from "maishu-node-data";
import websiteConfig from "./static/website-config";

interface Settings {
    port: number,
    componentStations: { [key: string]: string },
    imageHost: string,
    db: ConnectionOptions,
    menuItems?: MenuItem[],
}

export function start(settings: Settings) {

    let { componentStations, imageHost, port, db } = settings;

    createConnection(db);

    let contextData: ContextData = {
        db,
        menuItem: settings.menuItems || []
    };

    let virtualPaths = getVirtualPaths("/static", path.join(__dirname, "../src/static"));
    virtualPaths["/static/node_modules"] = path.join(__dirname, "../node_modules");
    virtualPaths["/static/content"] = path.join(__dirname, "../content");

    let proxy: MVCSettings["proxy"] = {};
    // proxy[`/${websiteConfig.componentStationPath}/(\\S*)`] = `${componentStation}/$1`;
    proxy["^/ueditor/net/upload/(\\S*)"] = `http://${imageHost}/Images/upload/$1`;
    for (let c in componentStations) {
        proxy[c] = componentStations[c];
        virtualPaths[`/${c}/(\\S*)`] = `${componentStations[c]}/$1`;
    }


    let mvcSettings: MVCSettings = {
        port,
        contextData,
        websiteDirectory: __dirname,
        virtualPaths,
        proxy,
    }

    startServer(mvcSettings, "mvc");
}


