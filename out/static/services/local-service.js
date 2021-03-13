"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LocalService = void 0;
const maishu_chitu_service_1 = require("maishu-chitu-service");
const maishu_toolkit_1 = require("maishu-toolkit");
const website_config_1 = require("../website-config");
const error_handle_1 = require("../error-handle");
// Service.headers["application-id"] = "7bbfa36c-8115-47ad-8d47-9e52b58e7efd";
class LocalService extends maishu_chitu_service_1.Service {
    constructor() {
        super(err => error_handle_1.errorHandle(err));
    }
    url(path) {
        let sitePath = null;
        let pageUrl = location.hash.substr(1);
        if (pageUrl.startsWith("/")) {
            pageUrl = pageUrl.substr(1);
            sitePath = pageUrl.split("/")[0];
        }
        if (sitePath) {
            path = maishu_toolkit_1.pathConcat(sitePath, path);
        }
        return path;
    }
    pageRecordList(args) {
        let url = this.url("page-data/list");
        return this.getByJson(url, { args });
    }
    removePageRecord(id) {
        let url = this.url("page-data/remove");
        return this.postByJson(url, { id });
    }
    addPageRecord(item) {
        return __awaiter(this, void 0, void 0, function* () {
            let r = yield this.postByJson(this.url("page-data/add"), { item });
            Object.assign(item, r);
            return item;
        });
    }
    updatePageRecord(item) {
        return __awaiter(this, void 0, void 0, function* () {
            let r = yield this.postByJson(this.url("page-data/update"), { item });
            Object.assign(item, r);
            return item;
        });
    }
    getPageRecord(id) {
        return __awaiter(this, void 0, void 0, function* () {
            let r = yield this.getByJson(this.url("page-data/item"), { id });
            return r;
        });
    }
    getPageDataByName(name) {
        return __awaiter(this, void 0, void 0, function* () {
            let r = yield this.getByJson(this.url("page-data/item"), { name });
            return r;
        });
    }
    // async clientFiles(): Promise<string[]> {
    //     let { protocol, host } = location;
    //     let r = await this.get<string[]>(this.url(`clientFiles`));
    //     return r;
    // }
    componentInfos() {
        return __awaiter(this, void 0, void 0, function* () {
            let config = yield this.componentStationConfig();
            return config.components;
        });
    }
    componentGroups() {
        return __awaiter(this, void 0, void 0, function* () {
            let config = yield this.componentStationConfig();
            return config.groups;
        });
    }
    componentStationConfig() {
        return __awaiter(this, void 0, void 0, function* () {
            let componentStationPath = website_config_1.default.componentStationPath;
            if (this._componentStationConfig != null)
                return this._componentStationConfig;
            let url = this.url(`${componentStationPath}/${website_config_1.default.componentStationConfig}`);
            if (url.endsWith(".json"))
                this._componentStationConfig = yield this.get(url);
            else
                this._componentStationConfig = yield this.loadJS(url);
            let _componentInfos = this._componentStationConfig.components;
            if (!_componentInfos["pathContacted"]) {
                _componentInfos["pathContacted"] = true;
                _componentInfos.forEach(o => {
                    if (o.path != null)
                        o.path = maishu_toolkit_1.pathConcat(componentStationPath, o.path);
                    if (o.editor != null)
                        o.editor = maishu_toolkit_1.pathConcat(componentStationPath, o.editor);
                    if (o.design != null)
                        o.design = maishu_toolkit_1.pathConcat(componentStationPath, o.design);
                    if (o.layout != null)
                        o.layout = maishu_toolkit_1.pathConcat(componentStationPath, o.layout);
                });
            }
            return this._componentStationConfig;
        });
    }
    templateList() {
        return __awaiter(this, void 0, void 0, function* () {
            let url = this.url("page-data/template-list");
            let r = this.getByJson(url);
            return r;
        });
    }
    loadJS(jsPath) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                requirejs([jsPath], (mod) => {
                    resolve(mod.default || mod);
                }, err => {
                    reject(err);
                });
            });
        });
    }
    setTheme(themeName) {
        return __awaiter(this, void 0, void 0, function* () {
            let url = this.url("set-theme");
            let r = yield this.postByJson(url, { themeName });
            return r;
        });
    }
}
exports.LocalService = LocalService;
