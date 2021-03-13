"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
class InfoComponent extends React.Component {
    render() {
        let { text } = this.props;
        return React.createElement("div", { className: "text-center", style: { paddingTop: 20, paddingBottom: 20 } }, text);
    }
}
exports.default = InfoComponent;
