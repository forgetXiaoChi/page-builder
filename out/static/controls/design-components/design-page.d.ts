import { PageData } from "maishu-jueying-core";
import { PageDesigner } from "maishu-jueying";
import * as React from "react";
import { ComponentPanel } from "../component-panel";
import { ComponentLoader } from "../component-loader";
import "css!devices";
declare type T = {
    page: DesignPage;
    designer: PageDesigner;
    pageData: PageData;
    componentPanel: ComponentPanel;
};
export declare let DesignPageContext: React.Context<T>;
interface State {
}
export declare class DesignPage extends React.Component<{
    pageData: PageData;
    componentPanel: ComponentPanel;
}, State> {
    element: HTMLElement;
    componentLoader: ComponentLoader;
    constructor(props: DesignPage["props"]);
    createComponentLoader(pageData: PageData): void;
    UNSAFE_componentWillReceiveProps(props: DesignPage["props"]): void;
    componentDidMount(): void;
    render(): JSX.Element;
}
export {};
