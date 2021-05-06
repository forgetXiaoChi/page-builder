import * as React from "react";
import { PageHeaderProps, PageHeader, registerComponent } from "maishu-jueying-core";

export default class Container extends React.Component<{}, {}> {
    render() {
        return <div>
            Hello World Ha Ha
        </div>
    }
}

registerComponent("Container", Container);

