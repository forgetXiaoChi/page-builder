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
exports.DesignView = exports.DesignerViewHeader = exports.DesignPageContext = void 0;
const React = require("react");
const maishu_jueying_1 = require("maishu-jueying");
require("jquery-ui");
const component_panel_1 = require("../component-panel");
const index_1 = require("../design-components/index");
require("../design-components/index");
const page_helper_1 = require("../page-helper");
const maishu_toolkit_1 = require("maishu-toolkit");
let groups = ["common", "navigation", "others"];
let groupTexts = {
    common: "常用", navigation: "导航", others: "其它"
};
exports.DesignPageContext = React.createContext({});
exports.DesignerViewHeader = React.createContext({});
class DesignView extends React.Component {
    constructor(props) {
        super(props);
        if (props.toolbarButtons) {
            props.toolbarButtons.reverse();
        }
        let pageData = this.props.pageData;
        this.state = {
            pageData, isReady: false, group: component_panel_1.commonGroup,
            pageName: props.pageName
        };
    }
    bodyVisible(pageData) {
        let r = page_helper_1.PageHelper.findBody(pageData);
        return r != null && r.props.visible == true;
    }
    headerVisible(pageData) {
        let r = page_helper_1.PageHelper.findHeader(pageData);
        return r != null && r.props.visible == true;
    }
    headerHeight(pageData, value) {
        if (value == null) {
            let r = page_helper_1.PageHelper.findHeader(pageData);
            return r === null || r === void 0 ? void 0 : r.props.height;
        }
        let r = page_helper_1.PageHelper.findHeader(pageData, true);
        r.props.height = value;
        this.setState({ pageData });
    }
    footerVisible(pageData) {
        let r = page_helper_1.PageHelper.findFooter(pageData);
        return r != null && r.props.visible == true;
    }
    footerHeight(pageData, value) {
        if (value == null) {
            let r = page_helper_1.PageHelper.findFooter(pageData);
            return r === null || r === void 0 ? void 0 : r.props.height;
        }
        let r = page_helper_1.PageHelper.findFooter(pageData, true);
        r.props.height = value;
        this.setState({ pageData });
    }
    showBody(pageData, visible) {
        return __awaiter(this, void 0, void 0, function* () {
            let c = page_helper_1.PageHelper.findBody(pageData);
            console.assert(c != null);
            c.props.visible = visible;
            this.setState({ pageData });
        });
    }
    showHeader(pageData, visible) {
        return __awaiter(this, void 0, void 0, function* () {
            let c = page_helper_1.PageHelper.findHeader(pageData, true);
            c.props.visible = visible;
            this.setState({ pageData });
        });
    }
    showFooter(pageData, visible) {
        return __awaiter(this, void 0, void 0, function* () {
            let c = page_helper_1.PageHelper.findFooter(pageData, true);
            c.props.visible = visible;
            this.setState({ pageData });
        });
    }
    onComponentCreated() {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.componentPanel == null || this.editorPanel == null)
                return;
        });
    }
    pageViewRef(e) {
        if (this.pageView != null || e == null)
            return;
        this.pageView = this.pageView || e;
        this.onComponentCreated();
    }
    renderPageData(pageData, componentPanel) {
        // let compoentLoader = new ComponentLoader(pageData);
        // compoentLoader.loadComponentSuccess.add(async args => {
        //     let { componentInfo } = args;
        //     await Promise.all([
        //         ComponentLoader.loadComponentEditor(componentInfo),
        //         ComponentLoader.loadComponentLayout(componentInfo),
        //     ])
        // })
        return React.createElement(index_1.DesignPage, { pageData: pageData, componentPanel: componentPanel });
    }
    get element() {
        return this.designer.element;
    }
    componentDidMount() {
        //==========================================================================================
        // 设置组件工具栏
        // let componentDefines = this.props.componentInfos.map(o => Object.assign({
        //     componentData: {
        //         type: o.type,
        //         props: {},
        //     }
        // }, o) as ComponentDefine)
        this.props.componentInfos.forEach(c => {
            c.data = c.data || { id: maishu_toolkit_1.guid(), type: c.type, props: {} };
        });
        this.componentPanel.setComponets(this.props.componentInfos);
        //==========================================================================================
        this.setState({ isReady: true, });
    }
    render() {
        let { pageData, isReady, group, pageName } = this.state;
        pageData.props.ref = (e) => this.pageViewRef(e);
        let { hidePageSettingPanel, toolbarButtons } = this.props;
        return React.createElement(maishu_jueying_1.PageDesigner, { pageData: pageData, ref: e => this.designer = e || this.designer },
            React.createElement("div", { className: "marvel-device iphone8 black pull-left" },
                React.createElement("div", { className: "top-bar" }),
                React.createElement("div", { className: "sleep" }),
                React.createElement("div", { className: "volume" }),
                React.createElement("div", { className: "camera" }),
                React.createElement("div", { className: "sensor" }),
                React.createElement("div", { className: "speaker" }),
                React.createElement("div", { className: "screen mobile-page", ref: e => this.mobileElement = this.mobileElement || e },
                    React.createElement(maishu_jueying_1.DesignerContext.Consumer, null, () => isReady ? this.renderPageData(pageData, this.componentPanel) : null)),
                React.createElement("div", { className: "home" }),
                React.createElement("div", { className: "bottom-bar" })),
            React.createElement("div", { style: { marginLeft: 440 } },
                React.createElement("ul", { className: "nav nav-tabs", style: { height: 32, margin: 0, padding: 0 } },
                    groups.map(o => React.createElement("li", { key: o, className: o == group ? "active" : null, style: { marginTop: -2 }, onClick: () => {
                            this.setState({ group: o });
                            this.componentPanel.setState({ group: o });
                        } },
                        React.createElement("a", null, groupTexts[o]))),
                    toolbarButtons.map((o, i) => React.createElement("li", { key: i, className: "pull-right" }, o))),
                React.createElement("div", null,
                    hidePageSettingPanel ? null : React.createElement("div", { className: "pull-right", style: { width: 240 } },
                        React.createElement("div", { className: "panel panel-default" },
                            React.createElement("div", { className: "panel-heading" }, "\u9875\u9762\u8BBE\u7F6E"),
                            React.createElement("ul", { className: "list-group" },
                                React.createElement("li", { className: "list-group-item clearfix" },
                                    React.createElement("div", { className: "pull-left" }, "\u9875\u9762\u540D\u79F0"),
                                    React.createElement("div", { className: "pull-right" },
                                        React.createElement("input", { name: "name", className: "form-control input-sm", style: { width: 140 }, value: pageName, onChange: e => {
                                                pageName = e.target.value;
                                                this.setState({ pageName });
                                            } }))),
                                React.createElement("li", { className: "list-group-item clearfix" },
                                    React.createElement("div", { className: "pull-left" }, "\u663E\u793A\u4E3B\u9875"),
                                    React.createElement("label", { className: "switch pull-right" },
                                        React.createElement("input", { type: "checkbox", className: "ace ace-switch ace-switch-5", checked: this.bodyVisible(pageData), onChange: e => this.showBody(pageData, e.target.checked) }),
                                        React.createElement("span", { className: "lbl middle" }))),
                                React.createElement("li", { className: "list-group-item clearfix" },
                                    React.createElement("div", { className: "pull-left" }, "\u663E\u793A\u9875\u7709"),
                                    React.createElement("label", { className: "switch pull-right" },
                                        React.createElement("input", { type: "checkbox", className: "ace ace-switch ace-switch-5", checked: this.headerVisible(pageData), onChange: e => this.showHeader(pageData, e.target.checked) }),
                                        React.createElement("span", { className: "lbl middle" }))),
                                React.createElement("li", { className: "list-group-item clearfix", style: { display: this.headerVisible(pageData) ? "" : "none" } },
                                    React.createElement("div", { className: "pull-left" }, "\u9875\u7709\u9AD8\u5EA6"),
                                    React.createElement("div", { className: "pull-right" },
                                        React.createElement("input", { className: "form-control input-sm", value: this.headerHeight(pageData) || "", style: { width: 60, textAlign: "right", display: this.headerVisible(pageData) ? "" : "none" }, onChange: e => {
                                                try {
                                                    let value = Number.parseInt(e.target.value);
                                                    this.headerHeight(pageData, value);
                                                }
                                                catch (_a) {
                                                }
                                            } }))),
                                React.createElement("li", { className: "list-group-item clearfix" },
                                    React.createElement("div", { className: "pull-left" }, "\u663E\u793A\u9875\u811A"),
                                    React.createElement("label", { className: "switch pull-right" },
                                        React.createElement("input", { type: "checkbox", className: "ace ace-switch ace-switch-5", checked: this.footerVisible(pageData), onChange: e => this.showFooter(pageData, e.target.checked) }),
                                        React.createElement("span", { className: "lbl middle" }))),
                                React.createElement("li", { className: "list-group-item clearfix", style: { display: this.footerVisible(pageData) ? "" : "none" } },
                                    React.createElement("div", { className: "pull-left" }, "\u9875\u811A\u9AD8\u5EA6"),
                                    React.createElement("div", { className: "pull-right" },
                                        React.createElement("input", { className: "form-control input-sm", style: { width: 60, textAlign: "right" }, value: this.footerHeight(pageData) || "", onChange: e => {
                                                try {
                                                    let value = Number.parseInt(e.target.value);
                                                    this.footerHeight(pageData, value);
                                                }
                                                catch (_a) {
                                                }
                                            } })))))),
                    React.createElement("div", { style: { marginRight: hidePageSettingPanel ? null : 260 } },
                        this.props.hideToolbar ? null : React.createElement(React.Fragment, null,
                            React.createElement(component_panel_1.ComponentPanel, { ref: e => {
                                    if (this.componentPanel != null || e == null)
                                        return;
                                    this.componentPanel = e;
                                    this.onComponentCreated();
                                } })),
                        this.props.hideEditorPanel ? null :
                            React.createElement(maishu_jueying_1.EditorPanel, { className: "well", customRender: this.props.customRender, ref: e => {
                                    if (this.editorPanel != null || e == null)
                                        return;
                                    this.editorPanel = this.editorPanel || e;
                                    this.onComponentCreated();
                                } })))));
    }
}
exports.DesignView = DesignView;
