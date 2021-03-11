export declare let dialogConfig: {
    dialogContainer: HTMLElement;
};
/** 弹窗
 * @param element bootstrap 的 modal 元素
 */
export declare function showDialog(element: HTMLElement, callback?: (button: HTMLButtonElement) => void): void;
export declare function hideDialog(element: HTMLElement): Promise<unknown>;
export declare function alert(args: string | {
    title: string;
    message: string;
    confirmText?: string;
}): void;
export declare function confirm(args: {
    title?: string;
    message: string;
    cancle?: () => Promise<any>;
    confirm: (event: Event) => Promise<any>;
    container?: HTMLElement;
    confirmText?: string;
    cancelText?: string;
}): void;
declare type ToastOptions = {
    title?: string;
    message: string;
};
declare type ToastMessage = string | HTMLElement | (() => string);
export declare let showToastMessage: typeof toast;
export declare function toast(options: ToastOptions): any;
export declare function toast(msg: ToastMessage): any;
export declare let showPanel: (args: {
    /** render header */
    header?: (headerElement: HTMLElement) => void;
    /** render body */
    body?: (bodyElement: HTMLElement) => void;
    /** render footer */
    footer?: (footerElement: HTMLElement) => void;
}) => {
    hide: () => void;
};
export {};
