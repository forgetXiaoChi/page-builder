"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const maishu_chitu_react_1 = require("maishu-chitu-react");
const React = require("react");
window["react"] = React;
window["h5"] = "weapp";
//================================================================================
// 为缺失的 API 提供默认值
window["wx"] = {};
window["getCurrentPages"] = function () { };
window["getApp"] = function () { };
window["requirePlugin"] = function () { };
//================================================================================
class MyApplication extends maishu_chitu_react_1.Application {
}
exports.app = new MyApplication();
