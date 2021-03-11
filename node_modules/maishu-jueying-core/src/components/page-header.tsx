import { ComponentProps } from "../component-data";
// import { component } from "./decorators";
import * as React from "react";
import { ComponentContainer } from "../component-container";
import { registerComponent } from "../register";

export interface PageHeaderProps extends ComponentProps {
    height: number,
    visible: boolean,
    style?: React.CSSProperties,
}

// @component({ type: PageHeader.typeName })
export class PageHeader extends React.Component<PageHeaderProps> {
    static typeName = "header";
    static className = "header";
    static id = "page-header";

    static defaultProps: PageHeaderProps = { height: 50, visible: true, id: PageHeader.id };

    render() {
        let style: React.CSSProperties = this.props.style || {};
        Object.assign({}, style, { height: this.props.height, display: this.props.visible ? "" : "none" });
        return <ComponentContainer id={this.props.id} className={PageHeader.className} style={style} />
    }
}

registerComponent(PageHeader.typeName, PageHeader);