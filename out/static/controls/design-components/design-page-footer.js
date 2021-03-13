"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DesignPageFooter = void 0;
const maishu_jueying_core_1 = require("maishu-jueying-core");
const React = require("react");
const component_container_1 = require("./component-container");
// @component({ type: PageFooter.typeName })
class DesignPageFooter extends React.Component {
    render() {
        let style = { height: this.props.height, display: this.props.visible ? "" : "none" };
        return React.createElement(component_container_1.ComponentContainer, { id: this.props.id, className: maishu_jueying_core_1.PageFooter.className, style: style, enable: this.props.enable });
    }
}
exports.DesignPageFooter = DesignPageFooter;
maishu_jueying_core_1.registerComponent(maishu_jueying_core_1.PageFooter.typeName, DesignPageFooter);
