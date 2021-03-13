import { action, contextData, routeData } from "maishu-node-mvc";
import { controller } from "maishu-nws-mvc";
import { connection, currentAppId } from "../decoders";
import { Connection } from "maishu-node-data";
import { errors } from "../static/errors";
import { StoreInfo } from "../entities";

@controller("/")
export class HomeController {
    @action("/menu-items")
    menuItems(@contextData cd: ContextData) {
        return cd.menuItem;
    }

    @action("/set-theme")
    async selectTheme(@currentAppId appId: string, @connection conn: Connection, @routeData d: { themeName: string }) {
        if (!appId) throw errors.argumentNull("appId");
        if (!d.themeName) throw errors.routeDataFieldNull("themeName");

        let storeInfos = conn.getRepository(StoreInfo);
        let storeInfo = await storeInfos.findOne(appId);
        if (storeInfo == null) {
            storeInfo = { id: appId, theme: d.themeName };
            await storeInfos.insert(storeInfo);
        }
        else {
            await storeInfos.update(appId, { theme: d.themeName });
        }

        return { id: storeInfo.id };
    }
}