"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FakeComponent = void 0;
const React = require("react");
const maishu_toolkit_1 = require("maishu-toolkit");
class FakeComponent extends React.Component {
    render() {
        return React.createElement("div", { key: this.props.id || maishu_toolkit_1.guid(), style: { padding: "50px 0 50px 0", textAlign: "center" } }, "\u7EC4\u4EF6\u6B63\u5728\u52A0\u8F7D\u4E2D...");
    }
}
exports.FakeComponent = FakeComponent;
