import { Connection, DataHelper } from "maishu-node-data";
import { action, controller, routeData } from "maishu-nws-mvc";
import { guid } from "maishu-toolkit";
import { connection, currentAppId } from "../decoders";
import { StoreDomain } from "../entities";

@controller("store-domain")
export class StoreDomainController {
    @action()
    async list(@connection conn: Connection) {
        let storeDomains = conn.getRepository(StoreDomain);
        let r = await DataHelper.list(storeDomains);
        return r;
    }

    @action()
    async insert(@connection conn: Connection, @routeData d: { item: StoreDomain }, @currentAppId appId: string) {
        let storeDomains = conn.getRepository(StoreDomain);
        d.item.id = guid();
        d.item.createDateTime = new Date();

        await storeDomains.insert(d.item);
        let r: Pick<StoreDomain, "createDateTime" | "id"> = { id: d.item.id, createDateTime: d.item.createDateTime };
        return r;

    }
}