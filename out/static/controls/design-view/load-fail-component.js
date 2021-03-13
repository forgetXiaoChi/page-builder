"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createComponentLoadFail = void 0;
const React = require("react");
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
