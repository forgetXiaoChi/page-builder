import * as React from "react";
import { PageProps } from "maishu-chitu-react";
import { PageRecord } from "../../entities";
import { LocalService } from "../services";
import { ComponentData, PageData, PageHeader } from "maishu-jueying-core";
import { PageHelper } from "../controls/page-helper";
import { DesignerContext, EditorPanel, EditorPanelProps, PageDesigner } from "maishu-jueying";
import { ComponentPanel } from "../controls/component-panel";
import { DesignPage } from "../controls/design-components/index";
import { getComponentRender } from "../component-renders/index";
import { dataSources } from "../services";
import { FormValidator, rules as r } from "maishu-dilu";
import * as ui from "maishu-ui-toolkit";
import { ComponentInfo } from "../model";
import { guid } from "maishu-toolkit";
import { ComponentLoader } from "../controls/component-loader";
import websiteConfig from "../website-config";

import "./content/pc-page-edit.less";
import "../create-design-element";
import strings from "../strings";

interface State {
    pageRecord?: PageRecord,
    componentInfos?: ComponentInfo[],
    // isReady: boolean,
    // pageName: string,
    templateRecord?: PageRecord,
    templateList?: PageRecord[],
    groups?: { id: string, name: string }[],
    themeName?: string,
    componentPanel?: ComponentPanel,
}

interface Props extends PageProps {
    pageRecord?: PageRecord,
    customRender?: EditorPanelProps["customRender"],
    data: { id?: string, name?: string },
}

let localService = new LocalService();
export default class PCPageEdit extends React.Component<Props, State> {
    // componentPanel: ComponentPanel;
    editorPanel: EditorPanel;
    validator: FormValidator;
    pageDesigner: PageDesigner;
    // themeName: string;

    constructor(props) {
        super(props);

        this.state = {
            pageRecord: this.props.pageRecord
        };

        localService.templateList().then(r => {
            this.setState({ templateList: r })
        });


    }

    async getThemeName() {
        let fileName = this.props.source.name.split("/").pop();
        console.assert(fileName.endsWith("-page-edit"));
        let themeName = fileName.substr(0, fileName.length - "-page-edit".length);
        if (themeName == "pc")
            themeName = await localService.getTheme();

        return themeName;
    }

    private emptyRecord(): Partial<PageRecord> {
        let pageData = this.emptyPageData();
        let record: Partial<PageRecord> = {
            pageData,
            type: "page",
            createDateTime: new Date()
        };
        return record;
    }

    private emptyPageData() {
        let r = PageHelper.emptyPageData();
        return r;
    }

    async componentDidMount() {


        let themeName = await this.getThemeName();
        localService.componentStationConfig("designtime", themeName).then(c => {
            let componentInfos = c.components;
            if (c.components != null) {
                componentInfos = componentInfos.filter(o => o.displayName != null);
                this.setState({ componentInfos });
                componentInfos.forEach(c => {
                    c.data = c.data || { id: guid(), type: c.type, props: {} };
                })


            }

            this.setState({ themeName, componentInfos })
            //==========================================================================================
        });

        let templateRecord: PageRecord;
        this.getPageRecord().then(async pageRecord => {
            if (pageRecord?.templateName) {
                templateRecord = await localService.getPageDataByName(pageRecord.templateName);
            }

            this.getPageRecord().then(async pageRecord => {
                if (pageRecord?.templateName) {
                    templateRecord = await localService.getPageDataByName(pageRecord.templateName);
                }
                this.setState({ pageRecord, templateRecord });
            })
        })
    }

    async componentRef(componentPanel: ComponentPanel | null, componentInfos: ComponentInfo[]) {
        if (!componentPanel || this.state.componentPanel != null) return;

        componentPanel.setComponets(componentInfos.map(o => Object.assign(o, {
            componentData: { type: o.type, props: {} } as ComponentData
        })));

        this.setState({ componentPanel })
    }

    async panelInnerRef(panelInnerElement: HTMLElement) {
        if (!panelInnerElement) return;

        window.addEventListener("scroll", (event) => {
            let display = this.props.source.element.style.display;
            if (display == "none")
                return;

            if (window.scrollY >= 100) {
                this.state.componentPanel.element.style.position = "relative";
                this.state.componentPanel.element.style.top = `${window.scrollY - 100}px`;
            }
            else {
                this.state.componentPanel.element.style.position = "unset";
                this.state.componentPanel.element.style.top = "unset";
            }
        });
    }

    private async getPageRecord() {
        let s = localService;
        let pageRecord: PageRecord;
        if (this.props.data.id) {
            pageRecord = await s.getPageRecord(this.props.data.id as string);
        }
        else if (this.props.data.name) {
            pageRecord = await s.getPageDataByName(this.props.data.name)
        }
        else {
            pageRecord = this.emptyRecord() as PageRecord;
            pageRecord.name = this.props.data.name;
        }

        if (!pageRecord)
            return null;

        pageRecord.pageData = pageRecord.pageData || this.emptyPageData();
        return pageRecord;
    }

    private renderPageData(pageData: PageData, componentPanel: ComponentPanel, themeName: string, template?: PageData) {
        if (componentPanel == null)
            return;

        if (template) {
            PageHelper.mergeTemplate(pageData, template);
        }

        //=====================================================
        // 调整 header，使得 header 在前面
        let header = PageHelper.findHeader(pageData, false);
        if (header != null) {
            pageData.children = pageData.children.filter(o => o.id != PageHeader.id);
            pageData.children.unshift(header);
        }
        //=====================================================

        return <DesignPage pageData={pageData} componentPanel={componentPanel} themeName={themeName}
            ref={e => {
                if (!e) return;
                e.componentLoader.loadComponentSuccess.add(args => {
                    Promise.all([
                        ComponentLoader.loadComponentEditor(args.componentInfo),
                        ComponentLoader.loadComponentLayout(args.componentInfo),
                    ]).then(() => {
                        this.setState({});
                    })
                })
            }} />
    }

    async save(): Promise<any> {
        let { } = this.state;

        if (!this.validator.check())
            return Promise.reject();

        let pageRecord = this.state.pageRecord;
        let templateRecord = this.state.templateRecord;
        pageRecord.editPage = "pc-page-edit";
        //===============================================
        // 移除掉模板控件
        if (templateRecord) {
            PageHelper.trimTemplate(pageRecord.pageData, templateRecord.pageData);
        }
        //===============================================
        if (pageRecord.id == null) {
            await dataSources.pageRecords.insert(pageRecord);
        }
        else {
            await dataSources.pageRecords.update(pageRecord);
        }
    }

    setPageDesigner(e: PageDesigner | null) {
        if (e == null) return;
        this.pageDesigner = this.pageDesigner || e;
        this.validator = new FormValidator(this.pageDesigner.element,
            { name: "name", rules: [r.required("请输入页面名称")] }
        );
    }

    changeTemplate(templateName: string) {
        let { pageRecord, templateRecord } = this.state;
        pageRecord.templateName = templateName;

        if (!templateName) {
            if (templateRecord != null) {
                PageHelper.trimTemplate(pageRecord.pageData, templateRecord.pageData);
            }
            this.setState({ templateRecord: null, pageRecord });
            return;
        }
        localService.getPageDataByName(templateName).then(r => {
            this.setState({ templateRecord: r });
        });
    }

    async preview(pageRecord: PageRecord) {
        let domain = await localService.defaultStoreDomain();
        let url: string;
        if (websiteConfig.storePort == 80) {
            url = `${location.protocol}//${domain}/${pageRecord.name}`;
        }
        else {
            url = `${location.protocol}//${domain}:5218/${pageRecord.name}`;
        }
        window.open(url);
    }

    render() {
        let { pageRecord, templateList } = this.state;
        templateList = templateList || [];
        return <>
            <div>
                <ul className="nav nav-tabs">
                    <li className="pull-right">
                        <button className="btn btn-sm btn-primary"
                            onClick={() => this.props.app.back()}>
                            <i className="fa fa-reply"></i><span>返回</span>
                        </button>
                    </li>
                    <li className="pull-right">
                        <button className="btn btn-sm btn-primary"
                            ref={e => {
                                if (!e) return;
                                ui.buttonOnClick(e, () => this.save(), { toast: "保存成功" })
                            }}>
                            <i className="fa fa-save"></i><span>保存</span>
                        </button>
                    </li>
                    <li className="pull-right">
                        <button className="btn btn-sm btn-primary"
                            onClick={() => this.preview(pageRecord)}>
                            <i className="fa fa-eye"></i><span>预览</span>
                        </button>
                    </li>

                </ul>
                <div>
                </div>
            </div>
            {this.renderMain()}
        </>
    }

    renderMain() {
        let { pageRecord, componentInfos, componentPanel, templateRecord, templateList, themeName } = this.state;
        templateList = templateList || [];

        if (pageRecord === undefined || componentInfos == undefined || themeName == undefined)
            return <div className="empty">
                数据加载中...
            </div>

        if (pageRecord === null)
            return <div className="empty">加载页面失败</div>

        return <PageDesigner pageData={pageRecord.pageData} className="page-designer"
            ref={e => this.setPageDesigner(e)}>

            <DesignerContext.Consumer>
                {() => componentPanel ? this.renderPageData(pageRecord.pageData, componentPanel, themeName, templateRecord?.pageData) : null}
            </DesignerContext.Consumer>

            <div className="component-property-panel">
                <div className="component-property-panel-inner" ref={e => this.panelInnerRef(e)}>
                    <ComponentPanel ref={e => this.componentRef(e, componentInfos)} />
                    <PageSettingsPenel parent={this} />
                    <EditorPanel className="well" customRender={(editComponents, propEditors) => {
                        let typeName = editComponents[0].type;
                        let componentEditorCustomRender = getComponentRender(typeName);
                        if (!componentEditorCustomRender)
                            return null;

                        return componentEditorCustomRender(propEditors);
                    }}
                        ref={e => this.editorPanel = this.editorPanel || e} />
                </div>
            </div>

        </PageDesigner>
    }
}

class PageSettingsPenel extends React.Component<{ parent: PCPageEdit }, { parent: PCPageEdit }>{

    constructor(props: PageSettingsPenel["props"]) {
        super(props);

        this.state = {
            parent: props.parent
        };
    }

    UNSAFE_componentWillReceiveProps(props: PageSettingsPenel["props"]) {
        this.setState({ parent: props.parent });
    }

    changeTemplate(templateName: string) {
        let { pageRecord, templateRecord } = this.props.parent.state;
        pageRecord.templateName = templateName;

        if (!templateName) {
            if (templateRecord != null) {
                PageHelper.trimTemplate(pageRecord.pageData, templateRecord.pageData);
            }
            this.props.parent.setState({ templateRecord: null, pageRecord });
            return;
        }
        localService.getPageDataByName(templateName).then(r => {
            this.props.parent.setState({ templateRecord: r });
        });
    }

    private bodyVisible(pageData: PageData): boolean {
        let r = PageHelper.findBody(pageData);
        return r != null && r.props.visible == true;
    }

    private async showBody(pageData: PageData, visible: boolean) {
        let c = PageHelper.findBody(pageData, true);
        console.assert(c != null);
        c.props.visible = visible;

        let pageRecord = this.props.parent.state.pageRecord;
        pageRecord.pageData = pageData;

        this.props.parent.setState({ pageRecord });
    }

    private headerVisible(pageData: PageData): boolean {
        let r = PageHelper.findHeader(pageData);
        return r != null && r.props.visible == true;
    }

    private async showHeader(pageData: PageData, visible: boolean) {
        let c = PageHelper.findHeader(pageData, true);
        c.props.visible = visible;
        c.props["style"] = {} as React.CSSProperties;

        let pageRecord = this.props.parent.state.pageRecord;
        pageRecord.pageData = pageData;

        this.props.parent.setState({ pageRecord });
    }

    private headerHeight(pageData: PageData, value?: number) {
        if (value == null) {
            let r = PageHelper.findHeader(pageData);
            return r?.props.height;
        }
        let r = PageHelper.findHeader(pageData, true);
        r.props.height = value;

        let pageRecord = this.props.parent.state.pageRecord;
        pageRecord.pageData = pageData;
        this.props.parent.setState({ pageRecord });
    }

    private footerVisible(pageData: PageData) {
        let r = PageHelper.findFooter(pageData);
        return r != null && r.props.visible == true;
    }

    private async showFooter(pageData: PageData, visible: boolean) {
        let c = PageHelper.findFooter(pageData, true);
        c.props.visible = visible;
        let pageRecord = this.props.parent.state.pageRecord;
        pageRecord.pageData = pageData;

        this.props.parent.setState({ pageRecord });
    }

    private footerHeight(pageData: PageData, value?: number) {
        if (value == null) {
            let r = PageHelper.findFooter(pageData);
            return r?.props.height;
        }

        let r = PageHelper.findFooter(pageData, true);

        r.props.height = value;
        let pageRecord = this.props.parent.state.pageRecord;
        pageRecord.pageData = pageData;

        this.props.parent.setState({ pageRecord });
    }

    render() {
        let { pageRecord, templateRecord, templateList } = this.props.parent.state;
        let pageData = pageRecord.pageData;
        if (templateList == null) {
            return <div className="empty">
                {strings.dataLoading}
            </div>
        }
        return <div className="panel panel-default">
            <div className="panel-heading">页面设置</div>
            <ul className="list-group">
                <li className="list-group-item clearfix">
                    <div className="pull-left">
                        页面名称</div>
                    <div className="pull-right">
                        <input name="name" className="form-control input-sm" style={{ width: 180 }} value={pageRecord.name || "No Name"}
                            onChange={(e) => {
                                pageRecord.name = e.target.value;
                                this.props.parent.setState({ pageRecord });
                            }} />
                    </div>
                </li>
                <li className="list-group-item clearfix">
                    <div className="pull-left">
                        视图尺寸</div>
                    <div className="pull-right">
                        <input name="name" className="form-control input-sm" style={{ width: 180 }} value={""}
                            onChange={() => {

                            }} />
                    </div>
                </li>
                <li className="list-group-item clearfix">
                    <div className="pull-left">
                        页面模板</div>
                    <div className="pull-right">
                        <select className="form-control" value={templateRecord?.name || ""} style={{ width: 180 }}
                            onChange={e => this.changeTemplate(e.target.value)}>
                            <option value="">请选择模板</option>
                            {templateList.map(t => <option value={t.name} key={t.id}>
                                {t.displayName || t.name}
                            </option>)}
                        </select>
                    </div>
                </li>
                <li className="list-group-item clearfix">
                    <div className="pull-left">
                        显示主页</div>
                    <label className="switch pull-right">
                        <input type="checkbox" className="ace ace-switch ace-switch-5"
                            checked={this.bodyVisible(pageData)}
                            onChange={e => this.showBody(pageData, e.target.checked)} />
                        <span className="lbl middle"></span>
                    </label>
                </li>
                <li className="list-group-item clearfix">
                    <div className="pull-left">
                        显示页眉</div>
                    <label className="switch pull-right">
                        <input type="checkbox" className="ace ace-switch ace-switch-5"
                            checked={this.headerVisible(pageData)}
                            onChange={e => this.showHeader(pageData, e.target.checked)} />
                        <span className="lbl middle"></span>
                    </label>
                </li>
                <li className="list-group-item clearfix" style={{ display: this.headerVisible(pageData) ? "" : "none" }}>
                    <div className="pull-left">
                        页眉高度</div>
                    <div className="pull-right">
                        <input className="form-control input-sm" value={this.headerHeight(pageData) || ""}
                            style={{ width: 60, textAlign: "right", display: this.headerVisible(pageData) ? "" : "none" }}
                            onChange={e => {
                                try {
                                    let value = Number.parseInt(e.target.value);
                                    this.headerHeight(pageData, value);
                                }
                                catch {

                                }
                            }} />
                    </div>
                </li>
                <li className="list-group-item clearfix">
                    <div className="pull-left">
                        显示页脚</div>
                    <label className="switch pull-right">
                        <input type="checkbox" className="ace ace-switch ace-switch-5"
                            checked={this.footerVisible(pageData)}
                            onChange={e => this.showFooter(pageData, e.target.checked)} />
                        <span className="lbl middle"></span>
                    </label>
                </li>
                <li className="list-group-item clearfix" style={{ display: this.footerVisible(pageData) ? "" : "none" }}>
                    <div className="pull-left">
                        页脚高度</div>
                    <div className="pull-right">
                        <input className="form-control input-sm" style={{ width: 60, textAlign: "right" }}
                            value={this.footerHeight(pageData) || ""}
                            onChange={e => {
                                try {
                                    let value = Number.parseInt(e.target.value);
                                    this.footerHeight(pageData, value);
                                }
                                catch {

                                }
                            }} />
                    </div>
                </li>
            </ul>
        </div>

    }
}
