export declare type Callback = (event: MouseEvent) => Promise<any>;
export declare type ClickArguments = {
    confirm?: string | (() => string);
    toast?: string | (() => string) | HTMLElement;
};
export declare function buttonOnClick(callback: Callback, args?: ClickArguments): (event: Event) => void;
export declare function buttonOnClick(element: HTMLButtonElement, callback: Callback, args?: ClickArguments): any;
