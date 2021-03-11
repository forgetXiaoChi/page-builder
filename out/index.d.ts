import { ConnectionOptions } from "maishu-node-data";
export declare function start(settings: {
    port: number;
    componentStation: string;
    imageHost: string;
    db: ConnectionOptions;
    menuItems?: MenuItem[];
}): void;
