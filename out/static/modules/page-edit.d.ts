import { DesignView } from "../controls/design-view/index";
import * as React from "react";
import { PageProps } from "maishu-chitu-react";
import { PageRecord } from "../../entities";
import { FormValidator } from "maishu-dilu";
import { EditorPanelProps } from "maishu-jueying";
import { ComponentInfo } from "../model";
interface State {
    pageRecord?: PageRecord;
    componentInfos?: ComponentInfo[];
}
interface Props extends PageProps {
    pageRecord?: PageRecord;
    customRender?: EditorPanelProps["customRender"];
    data: {
        id?: string;
    };
}
export default class PageEdit extends React.Component<Props, State> {
    protected validator: FormValidator;
    protected designView: DesignView;
    constructor(props: any);
    save(): Promise<any>;
    private emptyRecord;
    protected emptyPageData(): import("maishu-jueying-core").PageData;
    componentDidMount(): void;
    createValidator(form: HTMLElement): void;
    preivew(): void;
    render(): JSX.Element;
}
export {};
