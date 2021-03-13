"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const services_1 = require("../services");
const page_view_1 = require("../controls/page-view");
class TempPage extends React.Component {
    constructor(props) {
        super(props);
        this.localService = new services_1.LocalService();
        this.state = {};
    }
    componentDidMount() {
        this.localService.getPageDataByName("home").then(r => {
            this.setState({ pageRecord: r });
        });
    }
    render() {
        let { pageRecord } = this.state;
        if (pageRecord === undefined)
            return React.createElement("div", null, "\u6570\u636E\u6B63\u5728\u52A0\u8F7D\u4E2D...");
        if (pageRecord === null)
            return React.createElement("div", null, "\u6570\u636E\u52A0\u8F7D\u5931\u8D25");
        return React.createElement(page_view_1.PageView, { pageData: pageRecord.pageData });
    }
}
exports.default = TempPage;
