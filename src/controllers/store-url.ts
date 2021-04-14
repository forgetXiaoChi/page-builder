import { action, controller, routeData, serverContext, ServerContext } from "maishu-nws-mvc";
import { Connection } from "typeorm";
import { connection } from "../decoders";
import { PageRecord, StoreDomain } from "../entities";
import { errors } from "../static/errors";
import { In } from "maishu-node-data";

let pageNames = ["account", "shopping-cart", "product-list", "product", "order-detail", "receipt-edit",
    "receipt-list", "index", "login", "search", "checkout", "shipping"];

@controller("store-url")
export class StoreUrl {
    @action()
    async get(@routeData d: { appId: string }, @serverContext ctx: ServerContext, @connection conn: Connection) {
        if (!d.appId) throw errors.routeDataFieldNull("appId");

        let host = ctx.req.headers.host;
        let storeDomain: StoreDomain | null = null;
        if (host) {
            storeDomain = await conn.getRepository(StoreDomain).findOne({ domain: host });
        }

        if (storeDomain) {
            let dic: { [key: string]: string } = {};
            for (let i = 0; i < pageNames.length; i++) {
                conn.getRepository(PageRecord).find({
                    where: { name: In(pageNames) },
                    select: ["id", "name"],
                });

                dic[pageNames[i]] = "account"
            }
        }

        return {}
    }
}