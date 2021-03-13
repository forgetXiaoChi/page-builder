import { PageData } from "maishu-jueying-core";
import * as React from "react";
interface State {
    pageData?: PageData;
}
interface Props {
    data: {
        [key: string]: string;
    };
}
export default class MobilePage extends React.Component<Props, State> {
    constructor(props: any);
    loadPageData(): Promise<void>;
    render(): JSX.Element;
}
export {};
