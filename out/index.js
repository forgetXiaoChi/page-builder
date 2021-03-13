"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.start = void 0;
const path = require("path");
const maishu_node_mvc_1 = require("maishu-node-mvc");
const maishu_admin_scaffold_1 = require("maishu-admin-scaffold");
const maishu_node_data_1 = require("maishu-node-data");
const website_config_1 = require("./static/website-config");
function start(settings) {
    let { componentStation, imageHost, port, db } = settings;
    maishu_node_data_1.createConnection(db);
    let contextData = {
        db,
        menuItem: settings.menuItems || []
    };
    let virtualPaths = maishu_admin_scaffold_1.getVirtualPaths("/static", path.join(__dirname, "../src/static"));
    // virtualPaths["/static"] = path.join(__dirname, "../src/static");
    // virtualPaths["/static/modules"] = path.join(__dirname, "../src/static/modules");
    virtualPaths["/static/node_modules"] = path.join(__dirname, "../node_modules");
    let proxy = {};
    proxy[`/${website_config_1.default.componentStationPath}/(\\S*)`] = `${componentStation}/$1`;
    proxy["^/ueditor/net/upload/(\\S*)"] = `http://${imageHost}/Images/upload/$1`;
    let mvcSettings = {
        port,
        contextData,
        websiteDirectory: __dirname,
        virtualPaths,
        proxy,
    };
    maishu_node_mvc_1.startServer(mvcSettings, "mvc");
}
exports.start = start;
