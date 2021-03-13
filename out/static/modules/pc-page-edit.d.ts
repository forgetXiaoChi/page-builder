import * as React from "react";
import { PageProps } from "maishu-chitu-react";
import { PageRecord } from "../../entities";
import { LocalService } from "../services";
import { EditorPanel, EditorPanelProps, PageDesigner } from "maishu-jueying";
import { ComponentPanel } from "../controls/component-panel";
import "./pc-page-edit.less";
import { FormValidator } from "maishu-dilu";
import { ComponentInfo } from "../model";
interface State {
    pageRecord?: PageRecord;
    componentInfos?: ComponentInfo[];
    isReady: boolean;
    templateRecord?: PageRecord;
    templateList?: PageRecord[];
    groups?: {
        id: string;
        name: string;
    }[];
}
interface Props extends PageProps {
    pageRecord?: PageRecord;
    customRender?: EditorPanelProps["customRender"];
    data: {
        id?: string;
        name?: string;
    };
}
export default class PCPageEdit extends React.Component<Props, State> {
    componentPanel: ComponentPanel;
    editorPanel: EditorPanel;
    localService: LocalService;
    validator: FormValidator;
    pageDesigner: PageDesigner;
    constructor(props: any);
    private emptyRecord;
    private emptyPageData;
    componentDidMount(): Promise<void>;
    private getPageRecord;
    private renderPageData;
    private bodyVisible;
    private headerVisible;
    private headerHeight;
    private footerVisible;
    private footerHeight;
    private showBody;
    private showHeader;
    private showFooter;
    save(): Promise<any>;
    setPageDesigner(e: PageDesigner): void;
    changeTemplate(templateId: string): void;
    render(): JSX.Element;
    renderMain(): JSX.Element;
}
export {};
