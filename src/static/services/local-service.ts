import { Callbacks, Service, ValueStore } from "maishu-chitu-service";
import { DataSourceSelectArguments, DataSourceSelectResult } from "maishu-wuzhui-helper";
import { HtmlSnippet, PageRecord, StoreDomain, UrlRewrite } from "../../entities";
import { pathConcat } from "maishu-toolkit";
import { ComponentInfo } from "../model";
import websiteConfig from "../website-config";
import { errorHandle } from "../error-handle";
import { errors } from "../errors";


Service.headers["application-id"] = getApplicationId()

let service = new Service(err => errorHandle(err));

function getApplicationId() {
    if (localStorage.getItem("application-id")) {
        return localStorage.getItem("application-id");
    }

    function getQueryVariable(query: string, variable: string) {
        var vars = query.split('&');
        for (var i = 0; i < vars.length; i++) {
            var pair = vars[i].split('=');
            if (decodeURIComponent(pair[0]) == variable) {
                return decodeURIComponent(pair[1]);
            }
        }
        console.log('Query variable %s not found', variable);
    }

    let r = getQueryVariable(location.search.substring(1), "application-id");
    if (!r)
        getQueryVariable(location.hash.substring(1), "application-id");

    return r;
}



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
        let r: string;
        if (!baseUrl)
            r = path;
        else
            r = pathConcat(baseUrl, path);

        return r;
    }

    static pageUrl(path: string) {
        let contexts = requirejs.exec("contexts");
        let contextName = websiteConfig.requirejs?.context || "";
        if (!contextName)
            throw new Error("Context of website config is empty.");

        let context = contexts[contextName];
        let baseUrl = context?.config?.baseUrl;
        let r: string;
        if (!baseUrl)
            r = path;
        else
            r = pathConcat(baseUrl, path);

        if (r.startsWith("./"))
            r = r.substr(2);

        return r;
    }

    static getContext(): RequirejsContext {
        let contexts = requirejs.exec("contexts");
        let contextName = websiteConfig.requirejs?.context || "";
        if (!contextName)
            throw new Error("Context of website config is empty.");

        let context = contexts[contextName];
        if (!context) {
            console.assert(websiteConfig.requirejs != null);
            requirejs.config(websiteConfig.requirejs);
        }

        let load: (id: string, url: string) => void = context.load;
        context.load = function (id: string, url: string) {
            if (url[0] == "/" && !url.endsWith(".js"))
                url = url + ".js";

            load.apply(this, [id, url]);
        }
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
        if (!id) throw errors.argumentNull("id");

        let r = await service.getByJson<PageRecord>(LocalService.url("page-data/item"), { id });
        return r;
    }

    async getPageDataByName(name: string): Promise<PageRecord> {
        if (!name) throw errors.argumentNull("name");
        let r = await service.getByJson<PageRecord>(LocalService.url("page-data/item"), { name });
        return r;
    }

    storeDomainList(args: DataSourceSelectArguments): Promise<DataSourceSelectResult<StoreDomain>> {
        let url = LocalService.url("store-domain/list");
        return service.getByJson<DataSourceSelectResult<StoreDomain>>(url);
    }

    insertStoreDomain(item: StoreDomain) {
        let url = LocalService.url("store-domain/insert");
        return service.postByJson(url, { item });
    }

    updateStoreDomain(item: StoreDomain) {
        let url = LocalService.url("store-domain/update");
        return service.postByJson(url, { item });
    }

    deleteStoreDomain(item: StoreDomain) {
        let url = LocalService.url("store-domain/delete");
        return service.delete(url, { id: item.id });
    }

    urlRewriteList(args: DataSourceSelectArguments) {
        let url = LocalService.url("url-rewrite/list");
        return service.getByJson<DataSourceSelectResult<UrlRewrite>>(url, { args });
    }

    async urlRewriteInsert(item: UrlRewrite) {
        let url = LocalService.url("url-rewrite/insert");
        let r = await service.postByJson(url, { item });
        Object.assign(item, r);
        return r;
    }

    async urlRewriteUpdate(item: UrlRewrite) {
        let url = LocalService.url("url-rewrite/update");
        let r = await service.postByJson(url, { item });
        Object.assign(item, r);
        return r;
    }

    async urlRewriteDelete(item: UrlRewrite) {
        let url = LocalService.url("url-rewrite/delete");
        let r = await service.postByJson(url, { item });
        return r;
    }

    async htmlSnippetList(args: DataSourceSelectArguments) {
        let url = LocalService.url("html-snippet/list");
        return service.getByJson<DataSourceSelectResult<HtmlSnippet>>(url, { args });
    }

    async htmlSnippetInsert(item: HtmlSnippet) {
        let url = LocalService.url("html-snippet/insert");
        return service.postByJson(url, { item });
    }

    async htmlSnippetUpdate(item: HtmlSnippet) {
        let url = LocalService.url("html-snippet/update");
        let r = await service.postByJson(url, { item });
        Object.assign(item, r);
        return r;
    }

    async htmlSnippetDelete(item: HtmlSnippet) {
        let url = LocalService.url("html-snippet/delete");
        let r = await service.postByJson(url, { id: item.id });
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
        if (!_componentInfos)
            throw errors.componentsConfigNull();

        if ((_componentInfos as any)["pathContacted"] == undefined) {
            (_componentInfos as any)["pathContacted"] = true;
            _componentInfos.forEach(o => {
                if (o.path != null) {
                    o.path = pathConcat(themenName, o.path);
                    if (times == "designtime") {
                        o.path = o.path + ".des";
                    }
                }

                if (o.editor != null)
                    o.editor = pathConcat(themenName, o.editor);

                if (o.design != null) {
                    o.design = pathConcat(themenName, o.design);
                    if (times == "designtime") {
                        o.design = o.design + ".des";
                    }
                }

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