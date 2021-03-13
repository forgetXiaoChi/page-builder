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
const index_1 = require("../controls/design-view/index");
const React = require("react");
const maishu_ui_toolkit_1 = require("maishu-ui-toolkit");
const services_1 = require("../services");
const maishu_dilu_1 = require("maishu-dilu");
const services_2 = require("../services");
// import { ComponentInfo } from "taro-builder-core";
const page_helper_1 = require("../controls/page-helper");
class PageEdit extends React.Component {
    constructor(props) {
        super(props);
        this.state = { pageRecord: this.props.pageRecord };
        //==========================================================================================
        // 设置组件工具栏
        let localService = this.props.app.createService(services_1.LocalService);
        // this.loadLessFiles(localService);
        localService.componentInfos().then(componentInfos => {
            console.assert(componentInfos != null);
            componentInfos = componentInfos.filter(o => o.displayName != null);
            this.setState({ componentInfos });
            //==========================================================================================
        });
    }
    // async loadLessFiles(localService: LocalService) {
    //     let files = await localService.clientFiles();
    //     let editorLessFiles = files.filter(o => o.startsWith("components") && o.endsWith("editor.less"));
    //     editorLessFiles.forEach(path => {
    //         Less.renderByRequireJS(path, {});
    //     })
    // }
    save() {
        return __awaiter(this, void 0, void 0, function* () {
            let { pageName } = this.designView.state;
            if (!this.validator.check())
                return Promise.reject();
            let record = this.state.pageRecord;
            record.name = pageName;
            if (record.id == null) {
                yield services_2.dataSources.pageRecords.insert(record);
            }
            else {
                yield services_2.dataSources.pageRecords.update(record);
            }
        });
    }
    emptyRecord() {
        let pageData = this.emptyPageData();
        let record = {
            // id: pageData.id,
            pageData,
            type: "page",
            createDateTime: new Date()
        };
        return record;
    }
    emptyPageData() {
        return page_helper_1.PageHelper.emptyPageData();
    }
    componentDidMount() {
        let s = this.props.createService(services_1.LocalService);
        if (this.state.pageRecord == null) {
            if (this.props.data.id) {
                s.getPageRecord(this.props.data.id).then(d => {
                    this.setState({ pageRecord: d });
                });
            }
            else {
                let r = this.emptyRecord();
                this.setState({ pageRecord: r });
            }
        }
        this.createValidator(this.props.source.element);
    }
    createValidator(form) {
        if (this.validator)
            return;
        this.validator = new maishu_dilu_1.FormValidator(form, { name: "name", rules: [maishu_dilu_1.rules.required("请输入页面名称")] });
    }
    preivew() {
        window.open(`preview/index.html#page?id=${this.props.data.id}`, "_new");
    }
    render() {
        let { pageRecord, componentInfos } = this.state;
        if (pageRecord == undefined || componentInfos == undefined)
            return React.createElement("div", { className: "empty" }, "\u6570\u636E\u52A0\u8F7D\u4E2D...");
        return React.createElement(index_1.DesignView, Object.assign({}, {
            pageData: pageRecord.pageData, pageName: pageRecord.name, componentInfos,
            customRender: this.props.customRender
        }, { ref: e => this.designView = e || this.designView, toolbarButtons: [
                React.createElement("button", { className: "btn btn-sm btn-primary", onClick: () => this.preivew() },
                    React.createElement("i", { className: "fa fa-eye-open" }),
                    React.createElement("span", null, "\u9884\u89C8")),
                React.createElement("button", { className: "btn btn-sm btn-primary", ref: e => {
                        if (!e)
                            return;
                        maishu_ui_toolkit_1.buttonOnClick(e, () => this.save(), { toast: "保存成功!" });
                    } },
                    React.createElement("i", { className: "fa fa-save" }),
                    React.createElement("span", null, "\u4FDD\u5B58")),
                React.createElement("button", { className: "btn btn-sm btn-primary", onClick: () => this.props.app.back() },
                    React.createElement("i", { className: "fa fa-reply" }),
                    React.createElement("span", null, "\u8FD4\u56DE"))
            ] }));
    }
}
exports.default = PageEdit;
