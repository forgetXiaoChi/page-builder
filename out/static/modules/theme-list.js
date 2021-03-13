"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const maishu_toolkit_1 = require("maishu-toolkit");
const maishu_ui_toolkit_1 = require("maishu-ui-toolkit");
const React = require("react");
const local_service_1 = require("../services/local-service");
const strings_1 = require("../strings");
const website_config_1 = require("../website-config");
let localService = new local_service_1.LocalService();
class default_1 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        localService.componentStationConfig().then(c => {
            this.setState({ themes: c.themes });
        });
    }
    selectTheme(name) {
        return localService.setTheme(name);
    }
    render() {
        let { themes } = this.state;
        if (this.state.themes === undefined) {
            return React.createElement("div", { className: "empty" }, strings_1.default.dataLoading);
        }
        if (this.state.themes.length == 0) {
            return React.createElement("div", { className: "empty" }, strings_1.default.dataEmpty);
        }
        return React.createElement("div", { className: "row" }, themes.map(o => React.createElement("div", { key: o.path, className: "col-md-3 text-center" },
            React.createElement("img", { src: maishu_toolkit_1.pathConcat(website_config_1.default.componentStationPath, o.image), className: "img-responsive", style: { border: "solid 1px #cccccc" } }),
            React.createElement("button", { className: "btn btn-primary btn-block", style: { marginTop: 20 }, ref: e => {
                    if (!e)
                        return;
                    maishu_ui_toolkit_1.buttonOnClick(e, () => this.selectTheme(o.name));
                } },
                React.createElement("i", { className: "glyphicon glyphicon-ok" }),
                React.createElement("span", null, "\u9009\u62E9\u6A21\u677F")))));
    }
}
exports.default = default_1;
