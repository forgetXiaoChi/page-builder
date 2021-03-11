import { InputElement } from "./formValidator";
export declare type Validate = (value: any) => boolean | Promise<boolean>;
export declare type RuleDepend = Rule | (() => boolean);
export declare type ErrorInfo = string | (() => string);
export declare type Rule = {
    validate: (value: any) => boolean | Promise<boolean>;
    error?: ErrorInfo;
};
export declare type Value<T> = T | (() => T);
/**
 * 表单验证规则
 */
export declare let rules: {
    /**
     * 验证必填字段
     * @param error 错误提示文字
     */
    required(error?: ErrorInfo): Rule;
    /**
     * 验证两个字段值是否相等
     * @param otherElement 另外一个字段
     * @param error 错误提示文字
     */
    matches(otherElement: InputElement, error?: ErrorInfo): Rule;
    /**
     * 验证邮箱
     * @param error 错误提示文字
     */
    email(error?: ErrorInfo): Rule;
    /**
     * 验证字段最小长度
     * @param length 最小长度
     * @param error 错误提示文字
     */
    minLength(length: Value<number>, error?: ErrorInfo): Rule;
    /**
     * 验证字段的最大长度
     * @param length 最大长度
     * @param error 错误提示文字
     */
    maxLength(length: Value<number>, error?: ErrorInfo): Rule;
    /**
     * 验证字段大于指定的值
     * @param value 指定的值
     * @param error 错误提示文字
     */
    greaterThan(value: Value<number | Date>, error?: ErrorInfo): Rule;
    /**
     * 验证字段小于指定的值
     * @param value 指定的值
     * @param error 错误提示文字
     */
    lessThan(value: Value<number | Date | string>, error?: ErrorInfo): Rule;
    /**
     * 验证字段等于指定的值
     * @param value 指定的值
     * @param error 错误提示文字
     */
    equal(value: Value<number | Date | string>, error?: ErrorInfo): Rule;
    /**
     * 验证字段为 IP
     * @param error 错误提示文字
     */
    ip(error?: ErrorInfo): Rule;
    /**
     * 验证字段为 URL
     * @param error 错误提示文字
     */
    url(error?: ErrorInfo): Rule;
    /**
     * 验证字段为手机号码
     * @param error 错误提示文字
     */
    mobile(error?: ErrorInfo): Rule;
    /**
     * 验证字段为数字
     * @param error 错误提示文字
     */
    numeric(error?: ErrorInfo): Rule;
    /**
     * 自定义验证
     * @param validate 自定义验证的方法
     * @param error 错误提示文字
     */
    custom(validate: (value: any) => boolean | Promise<boolean>, error?: ErrorInfo): Rule;
};
