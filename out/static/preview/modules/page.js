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
const maishu_toolkit_1 = require("maishu-toolkit");
const React = require("react");
const maishu_jueying_core_1 = require("maishu-jueying-core");
const services_1 = require("../../services");
const component_loader_1 = require("../../controls/component-loader");
const page_helper_1 = require("../../controls/page-helper");
class PageView extends React.Component {
    constructor(props) {
        super(props);
        this.state = { pageData: this.emptyPageData() };
        this.localService = new services_1.LocalService();
        this.localService.getPageRecord(this.props.data.id)
            .then((r) => __awaiter(this, void 0, void 0, function* () {
            if (!(r === null || r === void 0 ? void 0 : r.templateId)) {
                return r;
            }
            let template = yield this.localService.getPageRecord(r.templateId);
            page_helper_1.PageHelper.mergeTemplate(r.pageData, template.pageData);
            return r;
        }))
            .then(r => {
            if (r == null) {
                this.setState({ pageData: null });
                return r;
            }
            r.pageData.children.forEach(c => {
                c.props.data = this.props.data;
            });
            let componentLoader = new component_loader_1.ComponentLoader(r.pageData);
            componentLoader.loadComponentsComplete.add(() => {
                this.setState({ pageData: r.pageData });
            });
            componentLoader.loadComponentTypes();
        }).catch(err => {
            console.error(err);
        });
    }
    emptyPageData() {
        let pageId = maishu_toolkit_1.guid();
        let pageData = {
            id: pageId,
            type: maishu_jueying_core_1.Page.name,
            props: {},
            children: [],
        };
        return pageData;
    }
    render() {
        let { pageData } = this.state;
        if (pageData === undefined)
            return React.createElement("div", { className: "empty" }, "\u6570\u636E\u6B63\u5728\u52A0\u8F7D\u4E2D...");
        if (pageData === null) {
            return React.createElement("div", { className: "empty" },
                React.createElement("div", null,
                    "\u9875\u9762 ",
                    this.props.data.id,
                    " \u4E0D\u5B58\u5728"));
        }
        return React.createElement(maishu_jueying_core_1.Page, { pageData: pageData });
    }
}
exports.default = PageView;
