/// <reference types="react" />
import { ComponentContainer as BaseComponentContainer, ComponentContainerProps as BaseComponentContainerProps } from "maishu-jueying-core";
export declare type ComponentContainerProps = BaseComponentContainerProps & {
    enable?: boolean;
};
export declare class ComponentContainer extends BaseComponentContainer<ComponentContainerProps> {
    private container;
    constructor(props: any);
    private enableDrapDrop;
    disable(): void;
    enable(): void;
    componentDidMount(): void;
    render(): JSX.Element;
}
