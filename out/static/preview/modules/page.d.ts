import * as React from "react";
import { PageData } from "maishu-jueying-core";
interface State {
    pageData?: PageData;
}
interface Props {
    data: {
        id: string;
    };
}
export default class PageView extends React.Component<Props, State> {
    private localService;
    constructor(props: any);
    emptyPageData(): PageData;
    render(): JSX.Element;
}
export {};
