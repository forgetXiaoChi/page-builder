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
const maishu_jueying_core_1 = require("maishu-jueying-core");
const errors_1 = require("../../errors");
const component_loader_1 = require("../../controls/component-loader");
const React = require("react");
const services_1 = require("../../services");
let localService = new services_1.LocalService();
class MobilePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.loadPageData();
    }
    loadPageData() {
        return __awaiter(this, void 0, void 0, function* () {
            let id = this.props.data["id"];
            if (!id)
                throw errors_1.errors.urlParameterEmpty("id");
            let r = yield localService.getPageRecord(id);
            if (r == null)
                throw errors_1.errors.pageRecordNotExists(id);
            // ComponentLoader.loadComponentTypes(r.pageData, () => {
            //     this.setState({});
            // }, true);
            let componentLoader = new component_loader_1.ComponentLoader(r.pageData);
            componentLoader.loadComponentsComplete.add(() => {
                this.setState({ pageData: r.pageData });
            });
        });
    }
    render() {
        let { pageData } = this.state;
        if (pageData == null)
            return React.createElement("div", { className: "empty" }, "\u6570\u636E\u6B63\u5728\u52A0\u8F7D\u4E2D...");
        return React.createElement(maishu_jueying_core_1.Page, { pageData: pageData });
    }
}
exports.default = MobilePage;
