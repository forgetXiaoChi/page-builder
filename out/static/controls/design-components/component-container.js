"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ComponentContainer = void 0;
const maishu_jueying_1 = require("maishu-jueying");
const maishu_jueying_core_1 = require("maishu-jueying-core");
const maishu_toolkit_1 = require("maishu-toolkit");
const design_page_1 = require("./design-page");
const maishu_jueying_core_2 = require("maishu-jueying-core");
const React = require("react");
class ComponentContainer extends maishu_jueying_core_2.ComponentContainer {
    constructor(props) {
        super(props);
    }
    enableDrapDrop(containerElement, designer) {
        let pageData = designer.pageData;
        console.assert(containerElement != null);
        $(containerElement).sortable({
            axis: "y",
            stop: () => {
                // let pageData = pageView.props.pageData;
                //==============================================================================================
                // 对组件进行排序
                console.assert(pageData.children != null);
                let childComponentDatas = [];
                let elements = containerElement.querySelectorAll("li");
                for (let i = 0; i < elements.length; i++) {
                    let childId = elements[i].getAttribute("data-component-id");
                    if (!childId)
                        continue;
                    console.assert(childId != null);
                    let child = pageData.children.filter((o) => o.id == childId)[0];
                    console.assert(child != null);
                    childComponentDatas.push(child);
                }
                let childIds = childComponentDatas.map(o => o.id);
                pageData.children = pageData.children.filter((o) => childIds.indexOf(o.id) < 0);
                pageData.children.push(...childComponentDatas);
                //==============================================================================================
            },
            receive: (event, ui) => {
                let componentData = JSON.parse(ui.helper.attr("component-data"));
                componentData.id = componentData.id || maishu_toolkit_1.guid();
                componentData.parentId = this.props.id;
                componentData.props = {
                // id: componentData.id,
                };
                let elementIndex = 0;
                ui.helper.parent().children().each((index, element) => {
                    if (element == ui.helper[0]) {
                        elementIndex = index;
                        return false;
                    }
                });
                let isFirst = elementIndex == 0;
                let isLatest = elementIndex == ui.helper.parent().children().length - 1;
                if (isFirst) {
                    designer.appendComponent(pageData.id, componentData, 0);
                }
                else if (isLatest) {
                    designer.appendComponent(pageData.id, componentData);
                }
                else {
                    let nextComponentDataId = ui.helper.parent().children()[elementIndex + 1].getAttribute("data-component-id");
                    let componentIds = pageData.children.map((o) => o.id);
                    let nextComponentDataIndex = componentIds.indexOf(nextComponentDataId);
                    console.assert(nextComponentDataId != null);
                    designer.appendComponent(pageData.id, componentData, nextComponentDataIndex);
                }
                designer.selectComponent(componentData.id);
                ui.helper.remove();
            }
        });
    }
    disable() {
        $(this.container).sortable("disable");
        $(this.container).find("li").attr("contentEditable", "true");
        $(this.container).find("li").css("cursor", "default");
    }
    enable() {
        $(this.container).sortable("options", "disable", false);
        $(this.container).find("li").attr("contentEditable", "false");
        $(this.container).find("li").css("cursor", "move");
    }
    componentDidMount() {
    }
    render() {
        return React.createElement(design_page_1.DesignPageContext.Consumer, null, args => {
            let pageData = args.pageData;
            if (pageData == null)
                return null;
            let children = pageData.children.filter(o => typeof o != "string" && o.parentId == this.props.id);
            let className = this.props.className || "";
            if (children.length == 0) {
                className = className + " empty";
            }
            return React.createElement("ul", { className: className, style: this.props.style, ref: e => {
                    if (e == null || this.container != null)
                        return;
                    this.container = e || this.container;
                    let enable = this.props.enable == null ? true : this.props.enable;
                    if (enable) {
                        this.enableDrapDrop(this.container, args.designer);
                        setTimeout(() => {
                            args.componentPanel.addDropTarget(this.container);
                        });
                    }
                } }, children.length == 0 ?
                React.createElement("li", { className: "text-center" },
                    React.createElement("h4", null, "\u8BF7\u62D6\u653E\u7EC4\u4EF6\u5230\u6B64\u5904"))
                : children.map(o => React.createElement("li", { key: o.id, "data-component-id": (o.id), className: o.selected ? "selected" : "", onClick: () => {
                        args.designer.selectComponent(o.id);
                    } }, maishu_jueying_core_1.parseComponentData(o))));
        });
    }
}
exports.ComponentContainer = ComponentContainer;
ComponentContainer.contextType = maishu_jueying_1.DesignerContext;
