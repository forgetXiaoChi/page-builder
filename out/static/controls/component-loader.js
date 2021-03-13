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
exports.CreateInfoComponent = exports.createComponentLoadFail = exports.FakeComponent = exports.ComponentLoader = void 0;
const maishu_jueying_core_1 = require("maishu-jueying-core");
const errors_1 = require("../errors");
const services_1 = require("../services");
const React = require("react");
const maishu_toolkit_1 = require("maishu-toolkit");
const maishu_toolkit_2 = require("maishu-toolkit");
let localRequirejs = require;
let localService = new services_1.LocalService();
class ComponentLoader {
    constructor(pageData, isRuntimeMode) {
        this.loadComponentsComplete = new maishu_toolkit_2.Callback();
        this.loadComponentSuccess = new maishu_toolkit_2.Callback();
        this.loadComponentFail = new maishu_toolkit_2.Callback();
        this._pageData = pageData;
        isRuntimeMode = isRuntimeMode == null ? false : isRuntimeMode;
        this.isDesignMode = !isRuntimeMode;
        let pageDataComponentTypes = [];
        let stack = [...this._pageData.children];
        while (stack.length > 0) {
            let item = stack.pop();
            if (ComponentLoader.isComponentData(item) && pageDataComponentTypes.indexOf(item.type) < 0)
                pageDataComponentTypes.push(item.type);
            if (Array.isArray(item)) {
                item.forEach(c => stack.push(c));
            }
            else {
                for (let key in item) {
                    if (item[key] != null && typeof item[key] == "object")
                        stack.push(item[key]);
                }
            }
        }
        this.typesToLoad = pageDataComponentTypes.filter(o => maishu_jueying_core_1.componentTypes[o] == null);
        for (let i = 0; i < this.typesToLoad.length; i++) {
            let type = this.typesToLoad[i];
            let componentType = maishu_jueying_core_1.componentTypes[type];
            if (componentType == null) {
                maishu_jueying_core_1.registerComponent(type, FakeComponent);
            }
        }
    }
    get pageData() {
        return this._pageData;
    }
    loadComponentTypes() {
        if (this.typesToLoad.length == 0) {
            this.loadComponentsComplete.fire({});
            return;
        }
        let executedCount = 0;
        for (let i = 0; i < this.typesToLoad.length; i++) {
            let type = this.typesToLoad[i];
            // let componentType = componentTypes[type] as any;
            // if (componentType == null) {
            //     registerComponent(type, FakeComponent);
            loadComponentType(type, this.isDesignMode).then(c => {
                maishu_jueying_core_1.registerComponent(type, c.componentType);
                console.assert(c.componentInfo != null);
                this.loadComponentSuccess.fire({
                    typeName: type, componentInfo: c.componentInfo,
                    pageData: this._pageData
                });
            }).catch(err => {
                console.error(err);
                this.loadComponentFail.fire({ typeName: type });
            }).finally(() => {
                executedCount = executedCount + 1;
                if (executedCount >= this.typesToLoad.length) {
                    this.loadComponentsComplete.fire({});
                }
            });
            // }
        }
    }
    static loadComponentEditor(compoenntInfo) {
        return loadComponentEditor(compoenntInfo);
    }
    static loadComponentLayout(compoenntInfo) {
        return loadComponentLayout(compoenntInfo);
    }
    static isComponentData(obj) {
        let c = obj;
        return typeof c == "object" && c.id != null && c.parentId != null && c.id != null && c.props != null;
    }
}
exports.ComponentLoader = ComponentLoader;
function loadComponentType(typeName, isDesignMode) {
    return __awaiter(this, void 0, void 0, function* () {
        let componentInfos = yield localService.componentInfos();
        let componentInfo = componentInfos.filter(o => o.type == typeName)[0];
        if (componentInfo == null) {
            let error = errors_1.errors.canntFindComponentInfo(typeName);
            ;
            let componentType = CreateInfoComponent(error.message);
            return { componentType, componentInfo };
        }
        let path = isDesignMode ? componentInfo.design || componentInfo.path : componentInfo.path;
        let componentType = yield new Promise((resolve, reject) => {
            localRequirejs([`${path}`], (mod) => {
                let compoenntType = mod[typeName] || mod["default"];
                if (compoenntType == null)
                    throw errors_1.errors.moduleNotExport(path, typeName);
                maishu_jueying_core_1.componentTypes[typeName] = compoenntType;
                resolve(compoenntType);
            }, err => {
                let text = typeof err == "string" ? err : err.message;
                let componentType = CreateInfoComponent(text);
                // return { componentType, componentInfo };
                // reject(err);
                console.error(err);
                resolve(componentType);
            });
        });
        // await editorPromise;
        // await layoutPromise;
        // return componentPromise;
        return { componentType, componentInfo };
    });
}
function loadComponentEditor(componentInfo) {
    return __awaiter(this, void 0, void 0, function* () {
        if ((componentInfo === null || componentInfo === void 0 ? void 0 : componentInfo.editor) == null)
            return Promise.resolve();
        return new Promise((resolve, reject) => {
            localRequirejs([`${componentInfo.editor}`], (mod) => {
                resolve(mod);
            }, err => {
                let text = typeof err == "string" ? err : err.message;
                let componentType = CreateInfoComponent(text);
                // reject(err);
                resolve(componentType);
            });
        });
    });
}
function loadComponentLayout(componentInfo) {
    return __awaiter(this, void 0, void 0, function* () {
        if ((componentInfo === null || componentInfo === void 0 ? void 0 : componentInfo.layout) == null)
            return Promise.resolve();
        //import { componentRenders } from "../component-renders/index";
        return new Promise((resolve, reject) => {
            require([`${componentInfo.layout}`, "component-renders/index"], (mod, renderModule) => {
                let func = (mod === null || mod === void 0 ? void 0 : mod.default) || mod;
                if (typeof func != "function") {
                    console.error(`Module ${componentInfo.layout} is not a function.`);
                    resolve({});
                }
                renderModule.setComponentRender(componentInfo.type, mod.default || mod);
                resolve(mod);
            }, err => {
                reject(err);
            });
        });
    });
}
class FakeComponent extends React.Component {
    render() {
        return React.createElement("div", { key: this.props.id || maishu_toolkit_1.guid(), style: { padding: "50px 0 50px 0", textAlign: "center" } }, "\u7EC4\u4EF6\u6B63\u5728\u52A0\u8F7D\u4E2D...");
    }
}
exports.FakeComponent = FakeComponent;
function createComponentLoadFail(error, reload) {
    return class ComponentLoadFail extends React.Component {
        render() {
            let msg = typeof error == "string" ? error : error.message;
            return React.createElement("div", null,
                React.createElement("div", { onClick: e => reload() }, "\u7EC4\u4EF6\u52A0\u8F7D\u9519\u8BEF, \u70B9\u51FB\u91CD\u65B0\u52A0\u8F7D"),
                React.createElement("div", null, msg));
        }
    };
}
exports.createComponentLoadFail = createComponentLoadFail;
function CreateInfoComponent(text) {
    return class InfoComponent extends React.Component {
        render() {
            return React.createElement("div", { className: "text-center", style: { paddingTop: 20, paddingBottom: 20 } }, text);
        }
    };
}
exports.CreateInfoComponent = CreateInfoComponent;
