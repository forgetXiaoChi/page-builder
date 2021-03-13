import * as React from "react";
import "jquery-ui";
import { ComponentInfo } from "../model";
interface ComponentToolbarProps extends React.ClassAttributes<ComponentPanel> {
    style?: React.CSSProperties;
    className?: string;
    empty?: string | JSX.Element;
}
interface ComponentToolbarState {
    components: ComponentInfo[];
    group: string;
}
export declare let commonGroup: string;
export declare class ComponentPanel extends React.Component<ComponentToolbarProps, ComponentToolbarState> {
    private toolbarElement;
    private COMPONENT_DATA;
    private targetElements;
    constructor(props: any);
    get element(): HTMLElement;
    setComponets(components: ComponentInfo[]): void;
    addDropTarget(targetElement: Element): void;
    componentDidMount(): Promise<void>;
    render(): JSX.Element;
}
export {};
