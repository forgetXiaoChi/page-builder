import { Connection, DataHelper } from "maishu-node-data";
import { action, controller, routeData } from "maishu-nws-mvc";
import { guid } from "maishu-toolkit";
import { connection, currentAppId } from "../decoders";
import { StoreDomain } from "../entities";
import { errors } from "../static/errors";

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
        d.item.applicationId = appId;

        await storeDomains.insert(d.item);
        let r: Pick<StoreDomain, "createDateTime" | "id"> = { id: d.item.id, createDateTime: d.item.createDateTime };
        return r;
    }

    @action()
    async update(@connection conn: Connection, @routeData d: { item: StoreDomain }, @currentAppId appId: string) {
        let storeDomains = conn.getRepository(StoreDomain);

        if (d.item.applicationId != appId)
            throw errors.applicationIdNotMatch(appId, d.item.applicationId);

        delete d.item.applicationId;
        delete d.item.createDateTime;

        storeDomains.update(d.item.id, d.item);

        let r: Pick<StoreDomain, "id"> = { id: d.item.id };
        return r;
    }

    @action()
    async delete(@connection conn: Connection, @routeData d: { id: string }, @currentAppId appId: string) {
        let storeDomains = conn.getRepository(StoreDomain);
        let item = await storeDomains.findOne(d.id);

        if (!item) throw errors.objectNotExists("StoreDomain", d.id);
        if (item.applicationId != appId) throw errors.applicationIdNotMatch(appId, item.applicationId);
        await storeDomains.delete(item);

        let r: Pick<StoreDomain, "id"> = { id: item.id };
        return r;
    }
}