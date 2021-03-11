interface MenuItem {
    id: string,
    name: string,
    path: string,
    children: { id: string, name: string, path: string, hidden: boolean }[]
}

interface ContextData {
    db: import("maishu-node-data").ConnectionOptions,
    menuItem: MenuItem[],
}

declare module "json!menu-items" {
    let r: MenuItem[];
    export = r;
}