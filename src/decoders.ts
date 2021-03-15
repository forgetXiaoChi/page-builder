import { createParameterDecorator, VirtualDirectory } from "maishu-node-mvc";
import { getConnectionManager, createConnection, getConnection, Connection } from "maishu-node-data";
import { ConnectionOptions } from "maishu-node-data";
// import { db } from "./nws-config";

let db: ConnectionOptions = {
    type: "mysql", username: "root", password: "81263", name: "taro-builder",
    database: "taro-builder", entities: ["./entities.js"],
    synchronize: false,
    // host: "127.0.0.1", port: 3306,
    host: "192.168.2.94", port: 43306
};

export type ServerContextData = {
    db: ConnectionOptions,
    staticRoot?: VirtualDirectory,
}
export let currentAppId = createParameterDecorator(async (context, routeData) => {
    let name = "application-id";
    let appId = context.req.headers[name] || routeData[name];
    return appId;
});

export let connection = createParameterDecorator(() => {
    return new Promise(async (resolve, reject) => {
        let connectionManager = getConnectionManager();
        let name = db.database as string;
        console.assert(name != null);
        let connection: Connection;
        if (!connectionManager.has(name)) {
            let dbOptions = db;
            connection = await createConnection(dbOptions);
        }
        else {
            connection = getConnection(name);

        }
        return resolve(connection);
    });
});
