import { PageRecord } from "../../entities";
import { dataSources } from "../services";
import * as React from "react";
import { boundField, createGridView, customDataField, dateTimeField, GridView } from "maishu-wuzhui-helper";
import * as ReactDOM from "react-dom";
import { LocalService } from "../services/local-service";
import { buttonOnClick, hideDialog, showDialog } from "maishu-ui-toolkit";
import strings from "../strings";
import { FormValidator, rules } from "maishu-dilu-react";
import { PageHelper } from "../controls/page-helper";

interface State {
    item: Partial<PageRecord>,
    templates?: PageRecord[],
}
let themes = ["aixpi", "flone", "generic"]
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
                boundField<PageRecord>({ dataField: "templateName", headerText: "模板", sortExpression: "templateName" }),
                dateTimeField<PageRecord>({ dataField: "createDateTime", headerText: "创建时间" }),
                customDataField<PageRecord>({
                    headerText: "操作",
                    itemStyle: { textAlign: "center", width: "150px" },
                    render: (dataItem, cellElement): void => {
                        (async () => {
                            let editUrl = await this.editUrl(dataItem.themeName, dataItem.name);

                            ReactDOM.render(<>
                                <button key="btnModify" className="btn btn-purple btn-minier"
                                    onClick={() => location.href = editUrl}>
                                    装修页面
                                </button>
                                <button key="btnEdit" className="btn btn-info btn-minier"
                                    onClick={() => this.showEditDialog(dataItem)}>
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

                        })()
                    }
                })
            ]
        })
    }
    async editUrl(themeName: string, name: string) {
        if (!themeName) {
            themeName = await localService.getTheme();
        }

        return `#/${LocalService.url(`${themeName}-page-edit?name=${name}`)}`;
    }
    showAddDialog() {
        this.validator.clearErrors();
        showDialog(this.dialogElement);
    }
    showEditDialog(item: Partial<PageRecord>) {
        this.validator.clearErrors();
        this.setState({ item });
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

        await this.gridView.dataSource.insert(item as PageRecord);
        hideDialog(this.dialogElement);
        setTimeout(() => {
            this.setState({ item: {} });
        }, 1000)
    }
    componentDidMount() {
        localService.templateList().then(items => {
            this.setState({ templates: items });
        })
    }
    render() {
        let { item, templates } = this.state;
        if (templates == null) {
            return <div>{strings.dataLoading}</div>
        }

        return <div>
            <ul className="nav nav-tabs">
                <li className="pull-right">
                    <button key="btnAdd" className="btn btn-primary "
                        onClick={() => this.showAddDialog()}>
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
                                        <input className="form-control"
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
                                        <select className="form-control"
                                            value={item.themeName || ""}
                                            onChange={e => {
                                                item.themeName = e.target.value;
                                                this.setState({ item })
                                            }}>
                                            <option value="">{strings.pageList.selectTheme}</option>
                                            {themes.map(t => <option key={t} value={t}>{t}</option>)}
                                        </select>
                                        {/* {this.validator.field(item.themeName, [rules.required(strings.pageList.selectTheme)])} */}
                                    </span>
                                </div>
                                <div className="form-group clearfix input-control">
                                    <label>
                                        {strings.pageList.template}
                                    </label>
                                    <span>
                                        <select className="form-control" value={item.templateName || ""}
                                            onChange={e => {
                                                item.templateName = e.target.value;
                                                this.setState({ item });
                                            }}>
                                            <option value="">{strings.pageList.selectTemplate}</option>
                                            {templates.map(t =>
                                                <option key={t.id} value={t.name}>{t.displayName || t.name}</option>
                                            )}
                                        </select>
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