"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PageView = void 0;
const React = require("react");
const maishu_jueying_core_1 = require("maishu-jueying-core");
const component_loader_1 = require("./component-loader");
const services_1 = require("../services");
class PageView extends React.Component {
    constructor(props) {
        super(props);
        this.localService = new services_1.LocalService();
        this.state = { pageData: null };
    }
    UNSAFE_componentWillReceiveProps(props) {
        this.createComponentLoader(props.pageData);
    }
    componentDidMount() {
        this.createComponentLoader(this.props.pageData);
    }
    createComponentLoader(pageData) {
        let componentLoader = new component_loader_1.ComponentLoader(pageData);
        componentLoader.loadComponentSuccess.add(args => {
        });
        componentLoader.loadComponentsComplete.add(() => {
            this.setState({ pageData: this.props.pageData });
        });
        componentLoader.loadComponentFail.add(() => {
        });
        // componentLoader.loadComponentTypes(this.props.pageData);
    }
    render() {
        let { pageData } = this.state;
        if (pageData == null)
            return React.createElement("div", { className: "empty" }, "\u7EC4\u4EF6\u6B63\u5728\u52A0\u8F7D\u4E2D...");
        return React.createElement(maishu_jueying_core_1.Page, { pageData: pageData });
    }
}
exports.PageView = PageView;
