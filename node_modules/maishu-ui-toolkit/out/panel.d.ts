export declare class Panel {
    private modalDialog;
    private _body;
    private _footer;
    private _header;
    private backdrop;
    private panel;
    private modal;
    constructor(element: HTMLElement);
    get header(): HTMLElement;
    get body(): HTMLElement;
    get footer(): HTMLElement;
    build(element: HTMLElement): void;
    show(): void;
    hide(): void;
}
