import * as React from "react";
import { ComponentStationConfig } from "../services/local-service";
interface Props {
}
interface State {
    themes?: ComponentStationConfig["themes"];
}
export default class extends React.Component<Props, State> {
    constructor(props: Props);
    selectTheme(name: string): Promise<unknown>;
    render(): JSX.Element;
}
export {};
