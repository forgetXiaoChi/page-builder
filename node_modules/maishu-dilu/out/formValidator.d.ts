import { Rule } from "./rules";
export declare type InputElement = HTMLElement & {
    name: string;
    value: string;
};
export declare type ValidateField = {
    name: string;
    rules: Rule[];
    errorElement?: HTMLElement;
    depends?: (((element: InputElement) => Promise<boolean>) | ((element: InputElement) => boolean))[];
    condition?: (element: InputElement) => boolean;
};
/**
 * 表单验证器，用于对表单中的字段进行验证
 */
export declare class FormValidator {
    static errorClassName: string;
    private form;
    private fields;
    private elementEvents;
    /** 输入框的值发生改变，是否重新校验该输入框的值，默认为 true */
    validateOnChanged: boolean;
    constructor(form: HTMLElement, ...fields: ValidateField[]);
    appendField(field: ValidateField): void;
    /**
     * 清除表单的错误信息
     */
    clearErrors(): void;
    /**
     * 清除表单的指定元素错误信息
     * @param name 指定的元素名称
     */
    clearElementError(name: string): void;
    /**
     * 设置表单的指定元素错误信息
     * @param name 指定的元素名称
     * @param error 错误信息
     */
    setElementError(name: string, error: string): void;
    private fieldElement;
    private fieldErrorElement;
    /**
     * 验证字段
     */
    check(): boolean;
    /**
     * 异步验证字段
     */
    checkAsync(): Promise<boolean>;
    private bindElementEvent;
    private checkField;
    private checkFieldAsync;
    private showElement;
    /**
     * 异步验证 HTML 元素
     * @param name HTML 元素名称
     */
    checkElementAsync(name: string): Promise<boolean>;
    /**
     * 同步验证 HTML 元素
     * @param name HTML 元素名称
     */
    checkElement(name: string): boolean;
    private elementValue;
    private elementName;
}
