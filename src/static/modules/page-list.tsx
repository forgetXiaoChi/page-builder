import { PageRecord } from "../../entities";
import { dataSources } from "../services";
import * as React from "react";
import { boundField, createGridView, customDataField, dateTimeField } from "maishu-wuzhui-helper";
import * as ReactDOM from "react-dom";
import { LocalService } from "../services/local-service";
import { data } from "jquery";
import { showDialog } from "maishu-ui-toolkit";

export default class PageListPage extends React.Component {
    private dialogElement: HTMLElement;

    tableRef(e: HTMLTableElement) {
        createGridView({
            element: e,
            dataSource: dataSources.pageRecords,
            columns: [
                boundField<PageRecord>({ dataField: "name", headerText: "名称" }),
                boundField<PageRecord>({ dataField: "remark", headerText: "备注" }),
                boundField<PageRecord>({ dataField: "themeName", headerText: "主题", sortExpression: "themeName" }),
                dateTimeField<PageRecord>({ dataField: "createDateTime", headerText: "创建时间" }),
                customDataField<PageRecord>({
                    headerText: "操作",
                    itemStyle: { textAlign: "center", width: "120px" },
                    render: (dataItem, cellElement) => {
                        ReactDOM.render(<>
                            <button key="btnAdd" className="btn btn-info btn-minier"
                                onClick={() => location.href = this.editUrl(dataItem.themeName, data.name)}>
                                <i className="fa fa-pencil"></i>
                            </button>
                            <button key="btn-delete" className="btn btn-danger btn-minier"
                                onClick={() => location.href = "#page-edit?id=" + dataItem.id}>
                                <i className="fa fa-trash"></i>
                            </button>
                        </>, cellElement)
                    }
                })
            ]
        })
    }
    editUrl(themeName: string, name: string) {//  `#/${LocalService.url(`${dataItem.themeName}-page-edit`)}`
        return `#/${LocalService.url(`${themeName}-page-edit?name=${name}`)}`;
    }
    add() {
        showDialog(this.dialogElement);
    }
    render() {
        return <div>
            <ul className="nav nav-tabs">
                <li className="pull-right">
                    <button key="btnAdd" className="btn btn-primary "
                        onClick={() => this.add()}>
                        <i className="fa fa-plus"></i>
                        <span>添加</span>
                    </button>
                </li>
            </ul>
            <table ref={e => this.tableRef(e)}></table>
            {ReactDOM.createPortal(<>
                <div className="modal fade" ref={e => this.dialogElement = e || this.dialogElement}>
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span></button>
                                <h4 className="modal-title">Modal title</h4>
                            </div>
                            <div className="modal-body">
                                <p>One fine body&hellip;</p>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                                <button type="button" className="btn btn-primary">Save changes</button>
                            </div>
                        </div>
                    </div>
                </div>
            </>, document.body)}
        </div>
    }
}