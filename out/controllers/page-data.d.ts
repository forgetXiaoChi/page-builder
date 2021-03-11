import { ServerContext, ContentResult } from "maishu-node-mvc";
import { Connection, SelectArguments } from "maishu-node-data";
import { PageRecord } from "../entities";
export declare class PageDataController {
    list(conn: Connection, { args }: {
        args: SelectArguments;
    }): Promise<import("maishu-node-data").SelectResult<PageRecord>>;
    add(conn: Connection, { item }: {
        item: PageRecord;
    }, appId: any): Promise<Partial<PageRecord>>;
    update(conn: Connection, { item }: {
        item: Partial<PageRecord>;
    }, appId: any): Promise<{}>;
    remove(conn: Connection, { id }: {
        id: string;
    }): Promise<{}>;
    item(conn: Connection, { name, id }: {
        name: any;
        id: any;
    }, appId: any): Promise<PageRecord>;
    /**
     * 通过 id 获取多个 PageRecord
     */
    items(conn: Connection, { ids }: {
        ids: string[];
    }): Promise<PageRecord[]>;
    readWebsiteConfigFile(c: ServerContext): ContentResult;
    templateList(conn: Connection): Promise<PageRecord[]>;
    menuItems(cd: ContextData): MenuItem[];
}