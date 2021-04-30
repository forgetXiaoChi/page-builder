import { PageRecord } from "../../entities";
import { dataSources } from "../services";
import * as React from "react";
import { boundField, createGridView, customDataField, dateTimeField, GridView } from "maishu-wuzhui-helper";
import * as ReactDOM from "react-dom";
import { LocalService } from "../services/local-service";
import { data } from "jquery";
import { buttonOnClick, hideDialog, showDialog } from "maishu-ui-toolkit";
import strings from "../strings";
import { FormValidator, rules } from "maishu-dilu-react";
import { PageHelper } from "../controls/page-helper";

interface State {
    item: Partial<PageRecord>
}
let themes = ["aixpi", "flone"]
let localService = new LocalService();

export default class PageListPage extends React.Component<{}, State> {
    private dialogElement: HTMLElement;
    private validator = new FormValidator();
    private gridView: GridView<PageRecord>;

    constructor(props: PageListPage["props"]) {
        super(props);

        this.state = { item: {} };
    }
    tableRef(e: HTMLTableElement) {
        if (e == null || this.gridView != null) return;

        this.gridView = createGridView({
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
                                onClick={() => location.href = this.editUrl(dataItem.themeName, dataItem.name)}>
                                <i className="fa fa-pencil"></i>
                            </button>
                            <button key="btn-delete" className="btn btn-danger btn-minier"
                                ref={e => {
                                    if (!e) return;
                                    buttonOnClick(e, () => this.deleteItem(dataItem))
                                }}>
                                <i className="fa fa-trash"></i>
                            </button>
                        </>, cellElement)
                    }
                })
            ]
        })
    }
    editUrl(themeName: string, name: string) {//  `#/${LocalService.url(`${dataItem.themeName}-page-edit`)}`
        if (!themeName)
            return `#/${LocalService.url(`pc-page-edit?name=${name}`)}`;

        return `#/${LocalService.url(`${themeName}-page-edit?name=${name}`)}`;
    }
    add() {
        this.validator.clearErrors();
        showDialog(this.dialogElement);
    }
    async deleteItem(item: PageRecord) {
        await this.gridView.dataSource.delete(item);
    }
    async confirmAdd() {
        if (!this.validator.check())
            return;

        let item = this.state.item;
        item.pageData = PageHelper.emptyPageData();
        item.type = "page";
        // let item = await this.gridView.dataSource.insert({
        //     name: this.state.item.name, pageData: PageHelper.emptyPageData(),
        //     type: "page",
        // } as PageRecord);
        await this.gridView.dataSource.insert(item as PageRecord);
        hideDialog(this.dialogElement);
        this.setState({ item: {} });
    }
    render() {
        let { item } = this.state;
        return <div>
            <ul className="nav nav-tabs">
                <li className="pull-right">
                    <button key="btnAdd" className="btn btn-primary "
                        onClick={() => this.add()}>
                        <i className="fa fa-plus"></i>
                        <span>{strings.add}</span>
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
                                <h4 className="modal-title">{strings.pageList.addPage}</h4>
                            </div>
                            <div className="modal-body">
                                <div className="form-group clearfix input-control">
                                    <label>{strings.pageList.name}</label>
                                    <span>
                                        <input className="form-control" name="name"
                                            value={item.name || ""}
                                            onChange={e => {
                                                item.name = e.target.value;
                                                this.setState({ item });
                                            }} />
                                        {this.validator.field(item.name, [rules.required(strings.pageList.inputPageName)])}
                                    </span>
                                </div>
                                <div className="form-group clearfix input-control">
                                    <label>{strings.pageList.theme}</label>
                                    <span>
                                        <select className="form-control" name="name"
                                            value={item.themeName || ""}
                                            onChange={e => {
                                                item.themeName = e.target.value;
                                                this.setState({ item })
                                            }}>
                                            <option>请选择主题</option>
                                            {themes.map(t => <option value={t}>{t}</option>)}
                                        </select>
                                        {this.validator.field(item.themeName, [rules.required(strings.pageList.selectTheme)])}
                                    </span>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-default" data-dismiss="modal">
                                    {strings.cancel}
                                </button>
                                <button type="button" className="btn btn-primary"
                                    ref={e => {
                                        buttonOnClick(e, () => this.confirmAdd())
                                    }}>
                                    {strings.confirm}</button>
                            </div>
                        </div>
                    </div>
                </div>
            </>, document.body)}
        </div>
    }
}