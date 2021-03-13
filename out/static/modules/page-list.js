"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const services_1 = require("../services");
// import { boundField, dateTimeField } from "maishu-wuzhui-helper";
const React = require("react");
const maishu_wuzhui_helper_1 = require("maishu-wuzhui-helper");
const ReactDOM = require("react-dom");
// export default class PageList extends DataListPage<PageRecord> {
//     dataSource = dataSources.pageRecords;
//     itemName = "页面";
//     columns = [
//         boundField<PageRecord>({ dataField: "name", headerText: "名称" }),
//         dateTimeField<PageRecord>({ dataField: "createDateTime", headerText: "创建时间" })
//     ] as any;
//     deleteConfirmText = (dataItem: PageRecord) => `确定删除页面'${dataItem.name}'吗`;
//     protected addButton() {
//         return <button key="btnAdd" className="btn btn-primary"
//             onClick={() => this.props.app.redirect("page-edit")}>
//             <i className="icon-plus"></i>
//             <span>添加</span>
//         </button>
//     }
//     protected executeEdit(dataItem: PageRecord) {
//         if (dataItem.editPage) {
//             this.props.app.redirect(dataItem.editPage, { id: dataItem.id });
//             return;
//         }
//         this.props.app.redirect("page-edit", { id: dataItem.id });
//     }
// }
class PageListPage extends React.Component {
    tableRef(e) {
        maishu_wuzhui_helper_1.createGridView({
            element: e,
            dataSource: services_1.dataSources.pageRecords,
            columns: [
                maishu_wuzhui_helper_1.boundField({ dataField: "name", headerText: "名称" }),
                maishu_wuzhui_helper_1.dateTimeField({ dataField: "createDateTime", headerText: "创建时间" }),
                maishu_wuzhui_helper_1.customDataField({
                    headerText: "操作",
                    itemStyle: { textAlign: "center", width: "120px" },
                    render: (dataItem, cellElement) => {
                        ReactDOM.render(React.createElement(React.Fragment, null,
                            React.createElement("button", { key: "btnAdd", className: "btn btn-info btn-minier", onClick: () => location.href = "#page-edit?id=" + dataItem.id },
                                React.createElement("i", { className: "fa fa-pencil" })),
                            React.createElement("button", { key: "btn-delete", className: "btn btn-danger btn-minier", onClick: () => location.href = "#page-edit?id=" + dataItem.id },
                                React.createElement("i", { className: "fa fa-trash" }))), cellElement);
                    }
                })
            ]
        });
    }
    render() {
        return React.createElement("div", null,
            React.createElement("ul", { className: "nav nav-tabs" },
                React.createElement("li", { className: "pull-right" },
                    React.createElement("button", { key: "btnAdd", className: "btn btn-primary ", onClick: () => location.href = "#page-edit" },
                        React.createElement("i", { className: "fa fa-plus" }),
                        React.createElement("span", null, "\u6DFB\u52A0")))),
            React.createElement("table", { ref: e => this.tableRef(e) }));
    }
}
exports.default = PageListPage;
