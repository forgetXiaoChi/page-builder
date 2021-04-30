import * as React from "react";
export const CreateDesignElement = "createDesignElement";
export let createDesignElement = function (type: any, props?: any, ...children: any[]) {

    if (type != React.Fragment) {
        props = props || {};
        if (props.onClick) {
            delete props.onClick;
        }

        if (props.href) {
            delete props.href;
        }

        let ref = props.ref as Function;
        props.ref = function (e: HTMLElement) {
            if (e != null && e.onclick != null) {
                e.onclick = function () {
                    console.warn("onclick event is disabled.")
                }
            }

            if (ref != null)
                ref.apply(this, [e]);
        }

    }


    return React.createElement(type, props, ...children);
};
(window as any)[CreateDesignElement] = createDesignElement;

window["createRuntimeElement"] = function (type: any, props?: any, ...children: any[]) {
    return React.createElement(type, props, ...children);
};
