import { ComponentProps } from "../component-data";
// import { component } from "./decorators";
import * as React from "react";
import { ComponentContainer } from "../component-container";
import { registerComponent } from "../register";

export interface PageFooterProps extends ComponentProps {
    height: number,
    visible: boolean,
    style?: React.CSSProperties,
}

// @component({ type: PageFooter.typeName })
export class PageFooter extends React.Component<PageFooterProps> {
    static typeName = "footer";
    static className = "footer";
    static id = "page-footer";
    static defaultProps: PageFooterProps = { id: PageFooter.id, height: 50, visible: true };

    render() {
        let style: React.CSSProperties = this.props.style || {};
        Object.assign({}, style, { height: this.props.height, display: this.props.visible ? "" : "none" });
        return <ComponentContainer id={this.props.id} className={PageFooter.className} style={style} />
    }
}

registerComponent(PageFooter.typeName, PageFooter);
