import * as React from "react";
import { EditorPanelProps } from "maishu-jueying";
import "jquery-ui";
import { PageData } from "maishu-jueying-core";
import "../design-components/index";
import { ComponentInfo } from "../../model";
interface Props {
    pageData: PageData;
    pageName: string;
    componentInfos: ComponentInfo[];
    hideToolbar?: boolean;
    hideEditorPanel?: boolean;
    hidePageSettingPanel?: boolean;
    toolbarButtons?: JSX.Element[];
    customRender?: EditorPanelProps["customRender"];
}
interface State {
    pageData: PageData;
    isReady: boolean;
    group: string;
    pageName: string;
}
export declare let DesignPageContext: React.Context<{
    designPage?: DesignView;
}>;
export declare let DesignerViewHeader: React.Context<{}>;
export declare class DesignView extends React.Component<Props, State> {
    private componentPanel;
    private editorPanel;
    private pageView;
    private mobileElement;
    private designer;
    constructor(props: Props);
    private bodyVisible;
    private headerVisible;
    private headerHeight;
    private footerVisible;
    private footerHeight;
    private showBody;
    private showHeader;
    private showFooter;
    private onComponentCreated;
    private pageViewRef;
    private renderPageData;
    get element(): HTMLElement;
    componentDidMount(): void;
    render(): JSX.Element;
}
export {};
