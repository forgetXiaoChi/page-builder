"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DesignPageBody = void 0;
const maishu_jueying_core_1 = require("maishu-jueying-core");
const React = require("react");
const component_container_1 = require("./component-container");
const design_page_1 = require("./design-page");
class DesignPageBody extends React.Component {
    render() {
        return React.createElement(design_page_1.DesignPageContext.Consumer, null, args => {
            let style = { marginTop: 0 };
            if (args.pageData == null)
                return null;
            let header = args.pageData.children.filter(o => o.type == maishu_jueying_core_1.PageHeader.typeName)[0];
            let footer = args.pageData.children.filter(o => o.type == maishu_jueying_core_1.PageFooter.typeName)[0];
            if (header != null && header.props.visible) {
                let p = header.props;
                style.marginTop = p.height;
                style.height = `calc(100% - ${p.height}px)`;
            }
            if (footer != null && footer.props.visible) {
                let p = footer.props;
                style.height = `calc(100% - ${style.marginTop + p.height}px)`;
            }
            style.display = this.props.visible ? "" : "none";
            return React.createElement(component_container_1.ComponentContainer, Object.assign({ className: maishu_jueying_core_1.PageBody.className }, this.props, { style: style, enable: this.props.enable }));
        });
    }
}
exports.DesignPageBody = DesignPageBody;
maishu_jueying_core_1.registerComponent(maishu_jueying_core_1.PageBody.typeName, DesignPageBody);
