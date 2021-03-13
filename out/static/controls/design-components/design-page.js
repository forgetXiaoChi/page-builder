"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DesignPage = exports.DesignPageContext = void 0;
const maishu_jueying_core_1 = require("maishu-jueying-core");
const maishu_jueying_1 = require("maishu-jueying");
const React = require("react");
const component_loader_1 = require("../component-loader");
require("css!devices");
exports.DesignPageContext = React.createContext({ page: null, designer: null, pageData: null, componentPanel: null });
class DesignPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.createComponentLoader(this.props.pageData);
    }
    createComponentLoader(pageData) {
        this.componentLoader = new component_loader_1.ComponentLoader(pageData);
        this.componentLoader.loadComponentSuccess.add(args => {
            // let componentInfo = args.componentInfo;
            // Promise.all([
            //     ComponentLoader.loadComponentEditor(componentInfo),
            //     ComponentLoader.loadComponentLayout(componentInfo),
            // ]).then(() => {
            //     this.setState({ pageData });
            // })
        });
        this.componentLoader.loadComponentsComplete.add(() => {
            this.setState({ pageData });
        });
        this.componentLoader.loadComponentFail.add(() => {
        });
    }
    UNSAFE_componentWillReceiveProps(props) {
        this.createComponentLoader(props.pageData);
    }
    componentDidMount() {
        this.componentLoader.loadComponentTypes();
    }
    render() {
        return React.createElement(maishu_jueying_1.DesignerContext.Consumer, null, args => {
            let value = {
                page: this, designer: args.designer, pageData: this.props.pageData,
                componentPanel: this.props.componentPanel
            };
            return React.createElement(exports.DesignPageContext.Provider, { value: value },
                React.createElement(maishu_jueying_core_1.Page, Object.assign({}, { pageData: this.props.pageData })));
        });
    }
}
exports.DesignPage = DesignPage;
DesignPage.contextType = maishu_jueying_1.DesignerContext;
maishu_jueying_core_1.registerComponent(maishu_jueying_core_1.Page.typeName, DesignPage);
