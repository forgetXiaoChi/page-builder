import { createParameterDecorator, VirtualDirectory } from "maishu-node-mvc";
import { getConnectionManager, createConnection, getConnection, Connection } from "maishu-node-data";
import { ConnectionOptions } from "maishu-node-data";
import * as querystring from "querystring";
import { StoreDomain } from "./entities";

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
    let u = querystring.parse(context.req.url);
    let appId = u[name] || context.req.headers[name] || routeData[name];
    if (!appId) {
        let host = context.req.headers.host || "";
        let domain = host.split(":").shift();
        let conn = await getMyConnection();
        let item = await conn.getRepository(StoreDomain).findOne({ domain });
        appId = item?.applicationId;
    }

    return appId;
});

export let connection = createParameterDecorator(() => {
    return getMyConnection();
});

export function getMyConnection() {
    return new Promise<Connection>(async (resolve, reject) => {
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
}
