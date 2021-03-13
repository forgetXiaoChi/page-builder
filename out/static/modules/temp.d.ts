import * as React from "react";
import { PageRecord } from "../../entities";
interface Props {
    pageRecord: PageRecord;
}
interface State {
    pageRecord?: PageRecord;
}
export default class TempPage extends React.Component<Props, State> {
    private localService;
    constructor(props: any);
    componentDidMount(): void;
    render(): JSX.Element;
}
export {};
