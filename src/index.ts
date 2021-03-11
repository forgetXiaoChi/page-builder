import * as path from "path";
import { startServer, Settings } from "maishu-node-mvc";
import { getVirtualPaths } from "maishu-admin-scaffold";
import { ConnectionOptions, createConnection } from "maishu-node-data";

export function start(settings: {
    port: number,
    componentStation: string,
    imageHost: string,
    db: ConnectionOptions,
    menuItems?: MenuItem[],
}) {

    let { componentStation, imageHost, port, db } = settings;

    createConnection(db);

    let contextData: ContextData = {
        db,
        menuItem: settings.menuItems || []
    };

    let virtualPaths = getVirtualPaths("/static", path.join(__dirname, "../src/static"));
    virtualPaths.static = path.join(__dirname, "../src/static");
    virtualPaths["static/node_modules"] = path.join(__dirname, "../node_modules");

    let mvcSettings: Settings = {
        port,
        contextData,
        websiteDirectory: __dirname,
        virtualPaths,
        proxy: {
            "/design/(\\S*)": `${componentStation}/$1`,
            "^/ueditor/net/upload/(\\S*)": `http://${imageHost}/Images/upload/$1`,
        }
    }

    startServer(mvcSettings, "mvc");
}


