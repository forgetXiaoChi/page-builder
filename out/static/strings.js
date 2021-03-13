"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getStrings = void 0;
let cnStrings = {
    dataLoading: "数据正在加载中...",
    dataEmpty: "暂无数据"
};
function getStrings() {
    return cnStrings;
}
exports.getStrings = getStrings;
let strings = getStrings();
exports.default = strings;
