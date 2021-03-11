import { VirtualDirectory } from "maishu-node-mvc";
import { ConnectionOptions } from "maishu-node-data";
export declare type ServerContextData = {
    db: ConnectionOptions;
    staticRoot?: VirtualDirectory;
};
export declare let currentAppId: (target: any, propertyKey: string | symbol, parameterIndex: number) => void;
export declare let connection: (target: any, propertyKey: string | symbol, parameterIndex: number) => void;
