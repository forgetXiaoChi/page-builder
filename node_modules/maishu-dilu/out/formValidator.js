"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FormValidator = void 0;
const errors_1 = require("./errors");
/**
 * 表单验证器，用于对表单中的字段进行验证
 */
class FormValidator {
    constructor(form, ...fields) {
        /** 输入框的值发生改变，是否重新校验该输入框的值，默认为 true */
        this.validateOnChanged = true;
        if (!form)
            throw errors_1.errors.argumentNull('form');
        this.fields = fields || [];
        this.form = form;
        this.elementEvents = {};
    }
    appendField(field) {
        this.fields.push(field);
    }
    /**
     * 清除表单的错误信息
     */
    clearErrors() {
        this.fields.map(o => o.errorElement)
            .filter(o => o != null)
            .forEach(o => o.style.display = 'none');
    }
    /**
     * 清除表单的指定元素错误信息
     * @param name 指定的元素名称
     */
    clearElementError(name) {
        if (!name)
            throw errors_1.errors.argumentNull('name');
        let fields = this.fields.filter(o => o.name == name);
        for (let field of fields) {
            let errorElement = this.fieldErrorElement(field);
            errorElement.style.display = 'none';
        }
    }
    /**
     * 设置表单的指定元素错误信息
     * @param name 指定的元素名称
     * @param error 错误信息
     */
    setElementError(name, error) {
        if (!name)
            throw errors_1.errors.argumentNull('name');
        if (!error)
            throw errors_1.errors.argumentNull('error');
        let fields = this.fields.filter(o => o.name == name);
        for (let field of fields) {
            let errorElement = this.fieldErrorElement(field);
            errorElement.style.removeProperty('display');
            errorElement.innerHTML = error;
        }
    }
    fieldElement(field) {
        let name = field.name;
        let element = this.form.querySelectorAll(`[name='${name}']`)[0];
        if (element == null)
            throw errors_1.errors.elementNotExists(name);
        return element;
    }
    fieldErrorElement(field) {
        if (!field.errorElement) {
            let errorElement = this.form.getElementsByClassName(`${FormValidator.errorClassName} ${field.name}`)[0];
            if (!errorElement) {
                let element = this.fieldElement(field);
                errorElement = document.createElement("span");
                errorElement.className = FormValidator.errorClassName;
                errorElement.style.display = 'none';
                if (element.nextSibling)
                    element.parentElement.insertBefore(errorElement, element.nextSibling);
                else
                    element.parentElement.appendChild(errorElement);
            }
            field.errorElement = errorElement;
        }
        return field.errorElement;
        // return errorElement;
    }
    /**
     * 验证字段
     */
    check() {
        let ps = new Array();
        for (let i = 0; i < this.fields.length; i++) {
            let field = this.fields[i];
            let element = this.fieldElement(field);
            if (field.condition && field.condition(element) == false)
                continue;
            let p = this.checkField(field);
            ps.push(p);
        }
        let result = ps.filter(o => o == false).length == 0;
        return result;
    }
    /**
     * 异步验证字段
     */
    checkAsync() {
        return __awaiter(this, void 0, void 0, function* () {
            let ps = new Array();
            for (let i = 0; i < this.fields.length; i++) {
                let field = this.fields[i];
                let element = this.fieldElement(field);
                if (field.condition && field.condition(element) == false)
                    continue;
                let p = this.checkFieldAsync(field);
                ps.push(p);
            }
            let checkResults = yield Promise.all(ps);
            let result = checkResults.filter(o => o == false).length == 0;
            return result;
        });
    }
    bindElementEvent(field, isAsync) {
        if (this.elementEvents[field.name]) {
            return;
        }
        let element = this.fieldElement(field);
        let validateFunc = (() => {
            let checking = false;
            return () => {
                if (checking)
                    return;
                checking = true;
                // isAsync ? this.checkFieldAsync(field) : this.checkField(field);
                if (isAsync) {
                    this.checkFieldAsync(field)
                        .then(() => checking = false)
                        .catch(() => checking = false);
                }
                else {
                    this.checkField(field);
                    checking = false;
                }
            };
        })();
        if (this.validateOnChanged) {
            element.addEventListener('change', validateFunc);
            let elementType = element.type || "text";
            if (elementType == "text" || elementType == "password") {
                element.addEventListener('keyup', validateFunc);
            }
            else if (elementType == "radio") {
                let name = element.name;
                let elements = this.form.querySelectorAll(`[name='${name}']`);
                for (let i = 0; i < elements.length; i++) {
                    if (elements[i] == element) {
                        continue;
                    }
                    elements[i].addEventListener("change", validateFunc);
                }
            }
        }
        this.elementEvents[field.name] = true;
    }
    checkField(field) {
        this.bindElementEvent(field, false);
        let element = this.fieldElement(field);
        let depends = field.depends || [];
        for (let j = 0; j < depends.length; j++) {
            let dependResult = depends[j](element);
            if (typeof dependResult == 'object') {
                throw new Error('Please use checkAsync method.');
            }
            let dependIsOK = dependResult;
            if (!dependIsOK)
                return false;
        }
        for (let j = 0; j < field.rules.length; j++) {
            let rule = field.rules[j];
            let element = this.fieldElement(field);
            if (element == null)
                throw errors_1.errors.fieldElementCanntNull();
            let value = this.elementValue(element);
            let isPass = rule.validate(value);
            if (typeof isPass == 'object') {
                throw new Error('Please use checkAsync method.');
            }
            this.showElement(!isPass, field, rule, element);
            if (!isPass)
                return false;
        }
        return true;
    }
    checkFieldAsync(field) {
        return __awaiter(this, void 0, void 0, function* () {
            this.bindElementEvent(field, true);
            let element = this.fieldElement(field);
            let depends = field.depends || [];
            for (let j = 0; j < depends.length; j++) {
                let dependResult = depends[j](element);
                if (typeof dependResult == 'boolean') {
                    dependResult = Promise.resolve(dependResult);
                }
                let dependIsOK = yield dependResult;
                if (!dependIsOK)
                    return false;
            }
            for (let j = 0; j < field.rules.length; j++) {
                let rule = field.rules[j];
                let element = this.fieldElement(field);
                if (element == null)
                    throw errors_1.errors.fieldElementCanntNull();
                let value = this.elementValue(element);
                let p = rule.validate(value);
                if (typeof p == 'boolean') {
                    p = Promise.resolve(p);
                }
                let isPass = yield p;
                this.showElement(!isPass, field, rule, element);
                if (!isPass)
                    return false;
            }
            return true;
        });
    }
    showElement(display, field, rule, element) {
        let errorElement = this.fieldErrorElement(field);
        console.assert(errorElement != null, 'errorElement cannt be null.');
        if (rule.error != null) {
            errorElement = field.errorElement;
            let name = this.elementName(element);
            let errorText = typeof rule.error == 'string' ? rule.error : rule.error() || '';
            errorElement.innerHTML = errorText.replace('%s', name);
        }
        if (display) {
            errorElement.style.removeProperty('display');
        }
        else {
            errorElement.style.display = 'none';
        }
    }
    /**
     * 异步验证 HTML 元素
     * @param name HTML 元素名称
     */
    checkElementAsync(name) {
        let field = this.fields.filter(o => o.name == name)[0];
        if (!field)
            throw errors_1.errors.elementNotExists(name);
        return this.checkFieldAsync(field);
    }
    /**
     * 同步验证 HTML 元素
     * @param name HTML 元素名称
     */
    checkElement(name) {
        let field = this.fields.filter(o => o.name == name)[0];
        if (!field)
            throw errors_1.errors.elementNotExists(name);
        return this.checkField(field);
    }
    elementValue(element) {
        if (element.tagName == "TEXTAREA") {
            return element.value;
        }
        let inputElement = element;
        if (inputElement.type == "radio") {
            let elements = this.form.querySelectorAll(`[name='${inputElement.name}']`);
            for (let i = 0; i < elements.length; i++) {
                if (elements[i].checked) {
                    return elements[i].value;
                }
            }
            return "";
        }
        return element.value;
    }
    elementName(element) {
        if (element.tagName == "TEXTAREA") {
            return element.name;
        }
        return element.name;
    }
}
exports.FormValidator = FormValidator;
FormValidator.errorClassName = 'validationMessage';
// }
