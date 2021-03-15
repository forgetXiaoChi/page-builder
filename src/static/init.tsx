import { Application } from "maishu-admin-scaffold/static/application";
import { PageRecord } from "../entities";
import { errors } from "./errors";
import { LocalService } from "./services";

type MenuItem = Application["mainMaster"]["menuItems"][0];

export default function (app: Application) {

    updateMenuItems(app);
    LocalService.themeChanged.add(args => {
        updateMenuItems(app);
    })
}

let pageMenuItems: MenuItem[] = [];
function updateMenuItems(app: Application) {
    LocalService.getPages().then(r => {

        let menuItems = app.mainMaster.state.menuItems;
        menuItems = menuItems.filter(o => pageMenuItems.map(c => c.id).indexOf(o.id) < 0);

        pageMenuItems = r.map(o => toMenuItem(o)).filter(o => o != null);

        console.assert(menuItems != null);
        menuItems.push(...pageMenuItems);

        app.mainMaster.setState({ menuItems });
    })
}

function toMenuItem(r: PageRecord): MenuItem {
    if (!r)
        throw errors.argumentNull("r");

    let pageName = r.name;
    if (pageName.endsWith("home")) {
        return { id: r.id, name: "首页", type: "menu", sortNumber: 100, path: `#${r.themeName}-page-edit?name=${r.name}` };
    }
    else if (pageName.endsWith("product-list")) {
        return { id: r.id, name: "商品列表", type: "menu", sortNumber: 110, path: `#${r.themeName}-page-edit?name=${r.name}` };
    }
    else if (pageName.endsWith("product")) {
        return { id: r.id, name: "商品", type: "menu", sortNumber: 120, path: `#${r.themeName}-page-edit?name=${r.name}` }
    }

    return null;
}

