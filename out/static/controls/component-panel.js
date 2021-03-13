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
exports.ComponentPanel = exports.commonGroup = void 0;
const React = require("react");
const maishu_jueying_1 = require("maishu-jueying");
const $ = require("jquery");
require("jquery-ui");
// export type ComponentDefine = ComponentInfo & {
//     componentData: ComponentData,
// }
exports.commonGroup = "common";
class ComponentPanel extends React.Component {
    constructor(props) {
        super(props);
        this.COMPONENT_DATA = "component-data";
        this.targetElements = [];
        this.state = { components: [], group: exports.commonGroup };
    }
    get element() {
        return this.toolbarElement;
    }
    setComponets(components) {
        components.forEach(c => {
            if (c.sortNumber == null)
                c.sortNumber = 0;
            if (typeof c.sortNumber == "string")
                c.sortNumber = Number.parseInt(c.sortNumber);
        });
        components.sort((a, b) => a.sortNumber < b.sortNumber ? -1 : 1);
        this.setState({ components: components }, () => {
            $(this.element).find("li").draggable({
                helper: "clone",
                revert: "invalid"
            });
        });
    }
    addDropTarget(targetElement) {
        this.targetElements.push(targetElement);
        $(this.element).find("li").draggable("option", "connectToSortable", this.targetElements);
    }
    componentDidMount() {
        return __awaiter(this, void 0, void 0, function* () {
        });
    }
    render() {
        let empty = this.props.empty || React.createElement("div", { className: "empty" }, "\u6682\u65E0\u53EF\u7528\u7EC4\u4EF6");
        let props = Object.assign({}, this.props);
        let { components, group } = this.state;
        components = components.filter(o => (o.group || exports.commonGroup) == group);
        return React.createElement("ul", Object.assign({}, props, { className: `${maishu_jueying_1.classNames.componentPanel}`, ref: (e) => this.toolbarElement = this.toolbarElement || e }), components.length == 0 ? empty : components.map((c, i) => {
            let props = { key: i };
            props[this.COMPONENT_DATA] = JSON.stringify(c.data);
            return React.createElement("li", Object.assign({}, props, { title: c.introduce, "data-sort-number": c.sortNumber }),
                React.createElement("div", { className: "btn-link" },
                    React.createElement("i", { className: c.icon, style: { fontSize: 44, color: 'black' }, ref: e => {
                            if (!e)
                                return;
                        } })),
                React.createElement("div", null, c.displayName));
        }));
    }
}
exports.ComponentPanel = ComponentPanel;
