import { ComponentData } from "./component-data";
import React = require("react");
import { componentTypes } from "./register";
import { errors } from "./errors";

export function parseComponentData(componentData: ComponentData) {
    let type = componentTypes[componentData.type];
    if (type == null) {
        throw errors.componentTypeNotExists(componentData.type);
    }
    let children: (string | React.ReactElement<any>)[] = [];
    if (componentData.children != null) {
        children = componentData.children.map(c => typeof c == "string" ? c : parseComponentData(c));
    }

    return React.createElement(type, componentData.props, ...children);
}

