import { VirtualDirectory } from "maishu-node-mvc";
import { ConnectionOptions } from "maishu-node-data";
export declare type ServerContextData = {
    db: ConnectionOptions;
    staticRoot?: VirtualDirectory;
};
export declare let currentAppId: any;
export declare let connection: any;
