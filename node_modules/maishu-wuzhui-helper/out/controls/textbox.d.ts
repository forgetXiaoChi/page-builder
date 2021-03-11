import * as w from 'maishu-wuzhui';
export declare type TextBoxParams<T> = {
    element: HTMLInputElement;
    dataField: keyof T;
    dataItem: T;
    valueType: 'string' | 'int' | 'float';
};
export declare class TextBox<T> {
    constructor(params: TextBoxParams<T>);
}
export declare function textbox<T>(args: w.TextBoxParams<T>): TextBox<T>;
