import { PageRecord } from "../../entities";
import { dataSources } from "../services";
import * as React from "react";
import { boundField, createGridView, customDataField, dateTimeField } from "maishu-wuzhui-helper";
import * as ReactDOM from "react-dom";
import { LocalService } from "../services/local-service";

export default class PageListPage extends React.Component {
    tableRef(e: HTMLTableElement) {
        createGridView({
            element: e,
            dataSource: dataSources.pageRecords,
            columns: [
                boundField<PageRecord>({ dataField: "name", headerText: "名称" }),
                boundField<PageRecord>({ dataField: "remark", headerText: "备注" }),
                dateTimeField<PageRecord>({ dataField: "createDateTime", headerText: "创建时间" }),
                customDataField<PageRecord>({
                    headerText: "操作",
                    itemStyle: { textAlign: "center", width: "120px" },
                    render: (dataItem, cellElement) => {
                        ReactDOM.render(<>
                            <button key="btnAdd" className="btn btn-info btn-minier"
                                onClick={() => location.href = LocalService.url(`${dataItem.themeName}-page-edit`)}>
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
    render() {
        return <div>
            <ul className="nav nav-tabs">
                <li className="pull-right">
                    <button key="btnAdd" className="btn btn-primary "
                        onClick={() => location.href = "#page-edit"}>
                        <i className="fa fa-plus"></i>
                        <span>添加</span>
                    </button>
                </li>
            </ul>
            <table ref={e => this.tableRef(e)}></table>
        </div>
    }
}