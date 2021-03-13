"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getComponentRender = exports.setComponentRender = void 0;
// 用于生成组件布局 
window["componentRenders"] = window["componentRenders"] || {};
let componentRenders = window["componentRenders"];
function getComponentRenders() {
    return componentRenders;
}
function setComponentRender(typeName, value) {
    let componentRenders = getComponentRenders();
    componentRenders[typeName] = value;
}
exports.setComponentRender = setComponentRender;
function getComponentRender(typeName) {
    let componentRenders = getComponentRenders();
    return componentRenders[typeName];
}
exports.getComponentRender = getComponentRender;
