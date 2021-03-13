import { Connection } from "maishu-node-data";
export declare class HomeController {
    menuItems(cd: ContextData): MenuItem[];
    selectTheme(appId: string, conn: Connection, d: {
        themeName: string;
    }): Promise<{
        id: any;
    }>;
}
