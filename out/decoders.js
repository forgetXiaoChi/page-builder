"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connection = exports.currentAppId = void 0;
const maishu_node_mvc_1 = require("maishu-node-mvc");
const maishu_node_data_1 = require("maishu-node-data");
// import { db } from "./nws-config";
let db = {
    type: "mysql", username: "root", password: "81263", name: "taro-builder",
    database: "taro-builder", entities: ["./entities.js"],
    synchronize: false,
    // host: "127.0.0.1", port: 3306,
    host: "192.168.2.94", port: 43306
};
exports.currentAppId = maishu_node_mvc_1.createParameterDecorator((context, routeData) => __awaiter(void 0, void 0, void 0, function* () {
    let name = "application-id";
    let appId = context.req.headers[name] || routeData[name];
    return appId;
}));
exports.connection = maishu_node_mvc_1.createParameterDecorator(() => {
    return new Promise((resolve, reject) => __awaiter(void 0, void 0, void 0, function* () {
        let connectionManager = maishu_node_data_1.getConnectionManager();
        let name = db.database;
        console.assert(name != null);
        let connection;
        if (!connectionManager.has(name)) {
            let dbOptions = db;
            connection = yield maishu_node_data_1.createConnection(dbOptions);
        }
        else {
            connection = maishu_node_data_1.getConnection(name);
        }
        return resolve(connection);
    }));
});
