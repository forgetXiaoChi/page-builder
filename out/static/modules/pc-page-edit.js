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
const React = require("react");
const services_1 = require("../services");
const page_helper_1 = require("../controls/page-helper");
const maishu_jueying_1 = require("maishu-jueying");
const component_panel_1 = require("../controls/component-panel");
const index_1 = require("../controls/design-components/index");
require("./pc-page-edit.less");
const index_2 = require("../component-renders/index");
const services_2 = require("../services");
const maishu_dilu_1 = require("maishu-dilu");
const ui = require("maishu-ui-toolkit");
const maishu_toolkit_1 = require("maishu-toolkit");
const component_loader_1 = require("../controls/component-loader");
class PCPageEdit extends React.Component {
    // componentLoader: ComponentLoader;
    constructor(props) {
        super(props);
        this.state = {
            pageRecord: this.props.pageRecord, isReady: false,
        };
        this.localService = this.props.app.createService(services_1.LocalService);
        this.localService.componentStationConfig().then(c => {
            let componentInfos = c.components;
            console.assert(componentInfos != null);
            componentInfos = componentInfos.filter(o => o.displayName != null);
            this.setState({ componentInfos, groups: c.groups });
            componentInfos.forEach(c => {
                c.data = c.data || { id: maishu_toolkit_1.guid(), type: c.type, props: {} };
            });
            this.componentPanel.setComponets(componentInfos.map(o => Object.assign(o, {
                componentData: { type: o.type, props: {} }
            })));
            //==========================================================================================
        });
        this.localService.templateList().then(r => {
            this.setState({ templateList: r });
        });
    }
    emptyRecord() {
        let pageData = this.emptyPageData();
        let record = {
            pageData,
            type: "page",
            createDateTime: new Date()
        };
        return record;
    }
    emptyPageData() {
        let r = page_helper_1.PageHelper.emptyPageData();
        return r;
    }
    componentDidMount() {
        return __awaiter(this, void 0, void 0, function* () {
            let pageRecord;
            let templateRecord;
            this.getPageRecord().then((pageRecord) => __awaiter(this, void 0, void 0, function* () {
                if (pageRecord === null || pageRecord === void 0 ? void 0 : pageRecord.templateId) {
                    templateRecord = yield this.localService.getPageRecord(pageRecord.templateId);
                }
                this.getPageRecord().then((pageRecord) => __awaiter(this, void 0, void 0, function* () {
                    if (pageRecord === null || pageRecord === void 0 ? void 0 : pageRecord.templateId) {
                        templateRecord = yield this.localService.getPageRecord(pageRecord.templateId);
                    }
                    this.setState({ isReady: true, pageRecord, templateRecord });
                }));
            }));
        });
    }
    getPageRecord() {
        return __awaiter(this, void 0, void 0, function* () {
            let s = this.localService;
            let pageRecord;
            if (this.props.data.id) {
                pageRecord = yield s.getPageRecord(this.props.data.id);
            }
            else if (this.props.data.name) {
                pageRecord = yield s.getPageDataByName(this.props.data.name);
            }
            else {
                pageRecord = this.emptyRecord();
                pageRecord.name = this.props.data.name;
            }
            if (!pageRecord)
                return null;
            pageRecord.pageData = pageRecord.pageData || this.emptyPageData();
            return pageRecord;
        });
    }
    renderPageData(pageData, componentPanel, template) {
        if (componentPanel == null)
            return;
        if (template) {
            page_helper_1.PageHelper.mergeTemplate(pageData, template);
        }
        return React.createElement(index_1.DesignPage, { pageData: pageData, componentPanel: componentPanel, ref: e => {
                if (!e)
                    return;
                e.componentLoader.loadComponentSuccess.add(args => {
                    Promise.all([
                        component_loader_1.ComponentLoader.loadComponentEditor(args.componentInfo),
                        component_loader_1.ComponentLoader.loadComponentLayout(args.componentInfo),
                    ]).then(() => {
                        this.setState({});
                    });
                });
            } });
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
        let pageRecord = this.state.pageRecord;
        pageRecord.pageData = pageData;
        this.setState({ pageRecord });
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
        let pageRecord = this.state.pageRecord;
        pageRecord.pageData = pageData;
        this.setState({ pageRecord });
    }
    showBody(pageData, visible) {
        return __awaiter(this, void 0, void 0, function* () {
            let c = page_helper_1.PageHelper.findBody(pageData, true);
            console.assert(c != null);
            c.props.visible = visible;
            let pageRecord = this.state.pageRecord;
            pageRecord.pageData = pageData;
            this.setState({ pageRecord });
        });
    }
    showHeader(pageData, visible) {
        return __awaiter(this, void 0, void 0, function* () {
            let c = page_helper_1.PageHelper.findHeader(pageData, true);
            c.props.visible = visible;
            c.props["style"] = {};
            let pageRecord = this.state.pageRecord;
            pageRecord.pageData = pageData;
            this.setState({ pageRecord });
        });
    }
    showFooter(pageData, visible) {
        return __awaiter(this, void 0, void 0, function* () {
            let c = page_helper_1.PageHelper.findFooter(pageData, true);
            c.props.visible = visible;
            let pageRecord = this.state.pageRecord;
            pageRecord.pageData = pageData;
            this.setState({ pageRecord });
        });
    }
    save() {
        return __awaiter(this, void 0, void 0, function* () {
            let {} = this.state;
            if (!this.validator.check())
                return Promise.reject();
            let pageRecord = this.state.pageRecord;
            let templateRecord = this.state.templateRecord;
            pageRecord.editPage = "pc-page-edit";
            //===============================================
            // 移除掉模板控件
            if (templateRecord) {
                page_helper_1.PageHelper.trimTemplate(pageRecord.pageData, templateRecord.pageData);
            }
            //===============================================
            if (pageRecord.id == null) {
                yield services_2.dataSources.pageRecords.insert(pageRecord);
            }
            else {
                yield services_2.dataSources.pageRecords.update(pageRecord);
            }
        });
    }
    setPageDesigner(e) {
        if (!e)
            return;
        this.pageDesigner = this.pageDesigner || e;
        this.validator = new maishu_dilu_1.FormValidator(this.pageDesigner.element, { name: "name", rules: [maishu_dilu_1.rules.required("请输入页面名称")] });
    }
    changeTemplate(templateId) {
        let { pageRecord, templateRecord } = this.state;
        pageRecord.templateId = templateId || null;
        if (!templateId) {
            if (templateRecord != null) {
                page_helper_1.PageHelper.trimTemplate(pageRecord.pageData, templateRecord.pageData);
            }
            this.setState({ templateRecord: null, pageRecord });
            return;
        }
        this.localService.getPageRecord(templateId).then(r => {
            this.setState({ templateRecord: r });
        });
    }
    render() {
        let { pageRecord, templateList } = this.state;
        // let pageData = pageRecord?.pageData;
        templateList = templateList || [];
        return React.createElement(React.Fragment, null,
            React.createElement("div", null,
                React.createElement("ul", { className: "nav nav-tabs" },
                    React.createElement("li", { className: "active", key: 1 },
                        React.createElement("a", null, "\u5E38\u7528")),
                    React.createElement("li", { key: 2 },
                        React.createElement("a", null, "\u5BFC\u822A")),
                    React.createElement("li", { key: 3 },
                        React.createElement("a", null, "\u5176\u5B83")),
                    React.createElement("li", { className: "pull-right" },
                        React.createElement("button", { className: "btn btn-sm btn-primary", onClick: () => this.props.app.redirect("page-list") },
                            React.createElement("i", { className: "fa fa-reply" }),
                            React.createElement("span", null, "\u8FD4\u56DE"))),
                    React.createElement("li", { className: "pull-right" },
                        React.createElement("button", { className: "btn btn-sm btn-primary", ref: e => {
                                if (!e)
                                    return;
                                ui.buttonOnClick(e, () => this.save(), { toast: "保存成功" });
                            } },
                            React.createElement("i", { className: "fa fa-save" }),
                            React.createElement("span", null, "\u4FDD\u5B58"))),
                    React.createElement("li", { className: "pull-right" },
                        React.createElement("button", { className: "btn btn-sm btn-primary", onClick: () => window.open(`preview.html#page?id=${pageRecord.id}`) },
                            React.createElement("i", { className: "fa fa-eye" }),
                            React.createElement("span", null, "\u9884\u89C8")))),
                React.createElement("div", null,
                    React.createElement(component_panel_1.ComponentPanel, { ref: e => this.componentPanel = this.componentPanel || e }))),
            this.renderMain());
    }
    renderMain() {
        let { pageRecord, componentInfos, isReady, templateRecord, templateList } = this.state;
        let pageData = pageRecord === null || pageRecord === void 0 ? void 0 : pageRecord.pageData;
        templateList = templateList || [];
        if (pageRecord === undefined || componentInfos == undefined)
            return React.createElement("div", { className: "empty" }, "\u6570\u636E\u52A0\u8F7D\u4E2D...");
        if (pageRecord === null)
            return React.createElement("div", { className: "empty" }, "\u52A0\u8F7D\u9875\u9762\u5931\u8D25");
        return React.createElement(maishu_jueying_1.PageDesigner, { pageData: pageRecord.pageData, ref: e => this.setPageDesigner(e) },
            React.createElement("div", { className: "pull-right", style: { width: 300, marginTop: -90 } },
                React.createElement("div", { className: "panel panel-default" },
                    React.createElement("div", { className: "panel-heading" }, "\u9875\u9762\u8BBE\u7F6E"),
                    React.createElement("ul", { className: "list-group" },
                        React.createElement("li", { className: "list-group-item clearfix" },
                            React.createElement("div", { className: "pull-left" }, "\u9875\u9762\u540D\u79F0"),
                            React.createElement("div", { className: "pull-right" },
                                React.createElement("input", { name: "name", className: "form-control input-sm", style: { width: 180 }, value: pageRecord.name || "No Name", onChange: (e) => {
                                        pageRecord.name = e.target.value;
                                        this.setState({ pageRecord });
                                    } }))),
                        React.createElement("li", { className: "list-group-item clearfix" },
                            React.createElement("div", { className: "pull-left" }, "\u89C6\u56FE\u5C3A\u5BF8"),
                            React.createElement("div", { className: "pull-right" },
                                React.createElement("input", { name: "name", className: "form-control input-sm", style: { width: 180 }, value: "", onChange: () => {
                                    } }))),
                        React.createElement("li", { className: "list-group-item clearfix" },
                            React.createElement("div", { className: "pull-left" }, "\u9875\u9762\u6A21\u677F"),
                            React.createElement("div", { className: "pull-right" },
                                React.createElement("select", { className: "form-control", value: (templateRecord === null || templateRecord === void 0 ? void 0 : templateRecord.id) || "", style: { width: 180 }, onChange: e => this.changeTemplate(e.target.value) },
                                    React.createElement("option", { value: "" }, "\u8BF7\u9009\u62E9\u6A21\u677F"),
                                    templateList.map(t => React.createElement("option", { value: t.id, key: t.id }, t.name))))),
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
                                    } }))))),
                React.createElement(maishu_jueying_1.EditorPanel, { className: "well", customRender: (editComponents, propEditors) => {
                        let typeName = editComponents[0].type;
                        let componentEditorCustomRender = index_2.getComponentRender(typeName);
                        if (!componentEditorCustomRender)
                            return null;
                        return componentEditorCustomRender(propEditors);
                    }, ref: e => this.editorPanel = this.editorPanel || e })),
            React.createElement(maishu_jueying_1.DesignerContext.Consumer, null, () => isReady ? this.renderPageData(pageRecord.pageData, this.componentPanel, templateRecord === null || templateRecord === void 0 ? void 0 : templateRecord.pageData) : null));
    }
}
exports.default = PCPageEdit;
