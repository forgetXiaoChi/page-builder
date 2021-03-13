"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DesignPageHeader = void 0;
const maishu_jueying_core_1 = require("maishu-jueying-core");
const React = require("react");
const component_container_1 = require("./component-container");
// @component({ type: PageHeader.typeName })
class DesignPageHeader extends React.Component {
    disable() {
        console.assert(this.componentContainer != null);
        this.componentContainer.disable();
    }
    render() {
        let style = { height: this.props.height, display: this.props.visible ? "" : "none" };
        return React.createElement(component_container_1.ComponentContainer, { id: this.props.id, className: maishu_jueying_core_1.PageHeader.className, style: style, enable: this.props.enable, ref: e => this.componentContainer = e || this.componentContainer });
    }
}
exports.DesignPageHeader = DesignPageHeader;
maishu_jueying_core_1.registerComponent(maishu_jueying_core_1.PageHeader.typeName, DesignPageHeader);
