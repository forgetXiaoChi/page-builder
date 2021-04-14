import * as path from "path";
import { startServer, Settings as MVCSettings } from "maishu-node-mvc";
import { getVirtualPaths } from "maishu-admin-scaffold";
import { ConnectionOptions, createConnection } from "maishu-node-data";
import websiteConfig from "./static/website-config";
import { sourceVirtualPaths } from "maishu-chitu-scaffold";
import { HtmlTransform } from "./content-transforms/html-transform";

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
        proxy,
        // urlRewrite: (rawUrl, options) => {
        //     let router = createRouter("/store/:applicationId/:pageId/?productId/*filePath", {
        //         applicationId: /[0-9A-Fa-f\-]{36}/,
        //         pageId: /[0-9A-Fa-f\-]{36}/,
        //         productId: /[0-9A-Fa-f\-]{36}/,
        //         filePath: /[0-9A-Za-z\-_\/\.]/,
        //     });
        //     let m = router.match(rawUrl);
        //     if (m) {
        //         if (m.filePath)
        //             return pathConcat("/", m.filePath);

        //         let q = Object.keys(m).filter(o => m[o] != null).map(o => `${o}=${m[o]}`).join('&');
        //         let u = `/preview.html?${q}`;
        //         return u;
        //     }
        //     return null;
        // }
    }

    let server = startServer(mvcSettings, "mvc");
    server.contentTransforms.push(new HtmlTransform());
}


