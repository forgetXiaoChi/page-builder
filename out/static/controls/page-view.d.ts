import * as React from "react";
import { PageData } from "maishu-jueying-core";
export interface PageViewProps {
    pageData: PageData;
}
export interface PageViewState {
    pageData: PageData;
}
export declare class PageView extends React.Component<PageViewProps, PageViewState> {
    private localService;
    constructor(props: PageViewProps);
    UNSAFE_componentWillReceiveProps(props: PageViewProps): void;
    componentDidMount(): void;
    createComponentLoader(pageData: PageData): void;
    render(): JSX.Element;
}
