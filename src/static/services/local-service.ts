import { Callbacks, Service, ValueStore } from "maishu-chitu-service";
import { DataSourceSelectArguments, DataSourceSelectResult } from "maishu-wuzhui-helper";
import { PageRecord } from "../../entities";
import { errors, pathConcat } from "maishu-toolkit";
import { ComponentInfo } from "../model";
import websiteConfig from "../website-config";
import { errorHandle } from "../error-handle";

Service.headers["application-id"] = "7bbfa36c-8115-47ad-8d47-9e52b58e7efd";

let service = new Service(err => errorHandle(err));

export class LocalService {

    constructor() {
    }

    static url(path: string) {
        let contexts = requirejs.exec("contexts");
        let contextName = websiteConfig.requirejs?.context || "";
        if (!contextName)
            throw new Error("Context of website config is empty.");

        let context = contexts[contextName];
        let baseUrl = context?.config?.baseUrl;
        if (!baseUrl)
            return path;

        let r = pathConcat(baseUrl, path);
        return r;
    }

    static getContext(): RequirejsContext {
        let contexts = requirejs.exec("contexts");
        let contextName = websiteConfig.requirejs?.context || "";
        if (!contextName)
            throw new Error("Context of website config is empty.");

        let context = contexts[contextName];
        return context;
    }

    pageRecordList(args: DataSourceSelectArguments) {
        let url = LocalService.url("page-data/list");
        return service.getByJson<DataSourceSelectResult<PageRecord>>(url, { args });
    }
    removePageRecord(id: string) {
        let url = LocalService.url("page-data/remove");
        return service.postByJson(url, { id });
    }
    async addPageRecord(item: Partial<PageRecord>) {
        let r = await service.postByJson(LocalService.url("page-data/add"), { item });
        Object.assign(item, r);
        return item;
    }
    async updatePageRecord(item: Partial<PageRecord>) {
        let r = await service.postByJson(LocalService.url("page-data/update"), { item });
        Object.assign(item, r);
        return item;
    }
    async getPageRecord(id: string): Promise<PageRecord> {
        let r = await service.getByJson<PageRecord>(LocalService.url("page-data/item"), { id });
        return r;
    }

    async getPageDataByName(name: string): Promise<PageRecord> {
        let r = await service.getByJson<PageRecord>(LocalService.url("page-data/item"), { name });
        return r;
    }

    async componentInfos(times: "designtime" | "runtime") {
        let config = await this.componentStationConfig(times);
        return config.components;
    }

    async componentGroups() {
        let config = await this.componentStationConfig("designtime");
        return config.groups;
    }

    private _componentStationConfig: ComponentStationConfig;
    async componentStationConfig(times: "designtime" | "runtime"): Promise<ComponentStationConfig> {
        let themenName = await this.getTheme();
        let componentStationPath = websiteConfig.componentStations[themenName];
        if (this._componentStationConfig != null)
            return this._componentStationConfig;

        let url = LocalService.url(`${themenName}/website-config.js`);
        this._componentStationConfig = await this.loadJS(url);

        let _componentInfos = this._componentStationConfig.components;
        if (_componentInfos["pathContacted"] == undefined) {
            _componentInfos["pathContacted"] = true;
            _componentInfos.forEach(o => {
                if (o.path != null) {
                    o.path = pathConcat(themenName, o.path);
                    if (times == "designtime") {
                        o.path = o.path + ".des";
                    }
                }

                if (o.editor != null)
                    o.editor = pathConcat(themenName, o.editor);

                if (o.design != null)
                    o.design = pathConcat(themenName, o.design);

                if (o.layout != null)
                    o.layout = pathConcat(themenName, o.layout);

            })
        }


        return this._componentStationConfig;
    }

    async templateList(): Promise<PageRecord[]> {
        let url = LocalService.url("page-data/template-list");
        let r = service.getByJson<PageRecord[]>(url);
        return r;
    }

    async loadJS<T>(jsPath: string): Promise<T> {
        let context = LocalService.getContext();
        return new Promise((resolve, reject) => {
            context.require([jsPath], (mod: any) => {
                resolve(mod.default || mod)
            }, (err: any) => {
                reject(err)
            })
        })
    }

    /** 设置模板 */
    async setTheme(themeName: string) {
        let url = LocalService.url("set-theme");
        let r = await service.postByJson(url, { themeName });

        LocalService.themeChanged.fire({ themeName });

        return r;
    }

    /** 获取模板 */
    private async getTheme(): Promise<string> {
        let url = LocalService.url("get-theme");
        let r = await service.getByJson<string>(url);
        return r;
    }

    static async getPages(): Promise<PageRecord[]> {
        let url = LocalService.url("get-pages");
        let pageRecords = await service.getByJson<PageRecord[]>(url);
        return pageRecords;
    }

    static themeChanged = Callbacks<{ themeName: string }>();

    static getPageTitle(pageName: string) {
        if (!pageName) throw errors.argumentNull("pageName");

        if (pageName.endsWith("home")) {
            return "首页";
        }
        else if (pageName.endsWith("product-list")) {
            return "商品列表";
        }
        else if (pageName.endsWith("product")) {
            return "商品页"
        }

        return null;
    }

}

export interface ComponentStationConfig {
    components: ComponentInfo[],
    groups: { name: string, id: string }[],
    themes: { name: string, path: string, title: string, image: string, }[],
}