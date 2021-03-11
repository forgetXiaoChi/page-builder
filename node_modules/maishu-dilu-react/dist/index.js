/*!
 * 
 *  maishu-dilu-react v1.2.0
 *  Copyright (c) 2016-2018, shu mai <ansiboy@163.com>
 *  Licensed under the MIT License.
 * 
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["react"], factory);
	else if(typeof exports === 'object')
		exports["dilu-react"] = factory(require("react"));
	else
		root["dilu-react"] = factory(root["react"]);
})(window, function(__WEBPACK_EXTERNAL_MODULE_react__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./out/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/maishu-dilu/dist/index.js":
/*!************************************************!*\
  !*** ./node_modules/maishu-dilu/dist/index.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*!
 * 
 *  maishu-dilu v1.9.1
 *  https://github.com/ansiboy/dilu
 *  
 *  Copyright (c) 2016-2018, shu mai <ansiboy@163.com>
 *  Licensed under the MIT License.
 * 
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else {}
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./out/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./out/errors.js":
/*!***********************!*\
  !*** ./out/errors.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.errors = void 0;
// namespace dilu {
exports.errors = {
    argumentNull(parameterName) {
        let msg = `Parameter ${parameterName} can not be null or empty.`;
        return new Error(msg);
    },
    elementValidateRuleNotSet(element) {
        let msg = `元素'${element.name}'没有设置验证规则`;
        return new Error(msg);
    },
    fieldElementCanntNull(fieldIndex) {
        // if (fieldIndex != null)
        let msg = fieldIndex != null ?
            `The element value in the field cannt be null, field index is ${fieldIndex}.` :
            `The element in the field is null`;
        return new Error(msg);
    },
    elementNotExists(name) {
        let msg = `Element ${name} is not exits in the form.`;
        return new Error(msg);
    },
    fieldResultExpectBooleanType(name) {
        let msg = `Result of ${name} field is expected boolean.`;
        return new Error(msg);
    }
};
// }


/***/ }),

/***/ "./out/formValidator.js":
/*!******************************!*\
  !*** ./out/formValidator.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
const errors_1 = __webpack_require__(/*! ./errors */ "./out/errors.js");
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


/***/ }),

/***/ "./out/index.js":
/*!**********************!*\
  !*** ./out/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.rules = exports.FormValidator = void 0;
var formValidator_1 = __webpack_require__(/*! ./formValidator */ "./out/formValidator.js");
Object.defineProperty(exports, "FormValidator", { enumerable: true, get: function () { return formValidator_1.FormValidator; } });
var rules_1 = __webpack_require__(/*! ./rules */ "./out/rules.js");
Object.defineProperty(exports, "rules", { enumerable: true, get: function () { return rules_1.rules; } });
__webpack_require__(/*! ./style */ "./out/style.js");


/***/ }),

/***/ "./out/rules.js":
/*!**********************!*\
  !*** ./out/rules.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.rules = void 0;
// namespace dilu {
var ruleRegex = /^(.+?)\[(.+)\]$/, numericRegex = /^[0-9]+$/, integerRegex = /^\-?[0-9]+$/, decimalRegex = /^\-?[0-9]*\.?[0-9]+$/, emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/, alphaRegex = /^[a-z]+$/i, alphaNumericRegex = /^[a-z0-9]+$/i, alphaDashRegex = /^[a-z0-9_\-]+$/i, naturalRegex = /^[0-9]+$/i, naturalNoZeroRegex = /^[1-9][0-9]*$/i, ipRegex = /^((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){3}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})$/i, base64Regex = /[^a-zA-Z0-9\/\+=]/i, numericDashRegex = /^[\d\-\s]+$/, urlRegex = /^((http|https):\/\/(\w+:{0,1}\w*@)?(\S+)|)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?$/, mobileRegex = /^1[34578]\d{9}$/, dateRegex = /\d{4}-\d{1,2}-\d{1,2}/;
let msgs = {
    required: '%s不能为空',
    matches: '%s与%s不匹配',
    "default": 'The %s field is still set to default, please change.',
    equal: '%s和%s必须相同',
    email: '不是有效的邮箱地址',
    valid_emails: 'The %s field must contain all valid email addresses.',
    minLength: '%s至少包含%s个字符',
    maxLength: '%s不能超过%s字符',
    exact_length: 'The %s field must be exactly %s characters in length.',
    greater_than: 'The %s field must contain a number greater than %s.',
    less_than: 'The %s field must contain a number less than %s.',
    alpha: 'The %s field must only contain alphabetical characters.',
    alpha_numeric: 'The %s field must only contain alpha-numeric characters.',
    alpha_dash: 'The %s field must only contain alpha-numeric characters, underscores, and dashes.',
    numeric: '请数入数字',
    integer: 'The %s field must contain an integer.',
    decimal: 'The %s field must contain a decimal number.',
    is_natural: 'The %s field must contain only positive numbers.',
    is_natural_no_zero: 'The %s field must contain a number greater than zero.',
    ip: 'The %s field must contain a valid IP.',
    valid_base64: 'The %s field must contain a base64 string.',
    valid_credit_card: 'The %s field must contain a valid credit card number.',
    is_file_type: 'The %s field must contain only %s files.',
    valid_url: 'The %s field must contain a valid URL.',
    greater_than_date: 'The %s field must contain a more recent date than %s.',
    less_than_date: 'The %s field must contain an older date than %s.',
    greater_than_or_equal_date: 'The %s field must contain a date that\'s at least as recent as %s.',
    less_than_or_equal_date: 'The %s field must contain a date that\'s %s or older.',
    mobile: '请输入正确的手机号码',
    custom: '请输入正确制',
};
function createValidation(validate, error) {
    return {
        validate: validate,
        error: error
    };
}
function calc(value) {
    if (typeof value == 'function') {
        return value();
    }
    return value;
}
/**
 * 表单验证规则
 */
exports.rules = {
    /**
     * 验证必填字段
     * @param error 错误提示文字
     */
    required(error) {
        let validate = (value) => (value || "") != '';
        return createValidation(validate, error || msgs.required);
    },
    /**
     * 验证两个字段值是否相等
     * @param otherElement 另外一个字段
     * @param error 错误提示文字
     */
    matches(otherElement, error) {
        var validate = (value) => value == otherElement.value;
        return createValidation(validate, error || msgs.required);
    },
    /**
     * 验证邮箱
     * @param error 错误提示文字
     */
    email(error) {
        var validate = (value) => emailRegex.test(value);
        return createValidation(validate, error || msgs.required);
    },
    /**
     * 验证字段最小长度
     * @param length 最小长度
     * @param error 错误提示文字
     */
    minLength(length, error) {
        var validate = (value) => (value || '').length >= calc(length);
        return createValidation(validate, error || msgs.minLength);
    },
    /**
     * 验证字段的最大长度
     * @param length 最大长度
     * @param error 错误提示文字
     */
    maxLength(length, error) {
        var validate = (value) => (value || '').length <= calc(length);
        return createValidation(validate, error || msgs.matches);
    },
    /**
     * 验证字段大于指定的值
     * @param value 指定的值
     * @param error 错误提示文字
     */
    greaterThan(value, error) {
        var validate = (o) => elementValueCompare(o, calc(value)) == 'greaterThan';
        return createValidation(validate, error || msgs.greater_than);
    },
    /**
     * 验证字段小于指定的值
     * @param value 指定的值
     * @param error 错误提示文字
     */
    lessThan(value, error) {
        var validate = (o) => elementValueCompare(o, calc(value)) == 'lessThan';
        return createValidation(validate, error || msgs.less_than);
    },
    /**
     * 验证字段等于指定的值
     * @param value 指定的值
     * @param error 错误提示文字
     */
    equal(value, error) {
        var validate = (o) => elementValueCompare(o, calc(value)) == 'equal';
        return createValidation(validate, error || msgs.equal);
    },
    /**
     * 验证字段为 IP
     * @param error 错误提示文字
     */
    ip(error) {
        var validate = (value) => ipRegex.test(value);
        return createValidation(validate, error || msgs.ip);
    },
    /**
     * 验证字段为 URL
     * @param error 错误提示文字
     */
    url(error) {
        var validate = (value) => urlRegex.test(value);
        return createValidation(validate, error || msgs.valid_url);
    },
    /**
     * 验证字段为手机号码
     * @param error 错误提示文字
     */
    mobile(error) {
        var validate = (value) => mobileRegex.test(value);
        return createValidation(validate, error || msgs.mobile);
    },
    /**
     * 验证字段为数字
     * @param error 错误提示文字
     */
    numeric(error) {
        var validate = (value) => numericRegex.test(value);
        return createValidation(validate, error || msgs.numeric);
    },
    /**
     * 自定义验证
     * @param validate 自定义验证的方法
     * @param error 错误提示文字
     */
    custom(validate, error) {
        return createValidation(validate, error || msgs.custom);
    }
};
function elementValueCompare(value, otherValue) {
    let elementValue;
    if (typeof otherValue == 'number') {
        elementValue = decimalRegex.test(value) ? parseFloat(value) : null;
    }
    else if (typeof otherValue == 'string') {
        elementValue = value;
    }
    else {
        elementValue = getValidDate(value);
    }
    if (elementValue < otherValue)
        return 'lessThan';
    else if (elementValue > otherValue)
        return 'greaterThan';
    else
        return 'equal';
}
/**
 * private function _getValidDate: helper function to convert a string date to a Date object
 * @param date (String) must be in format yyyy-mm-dd or use keyword: today
 * @returns {Date} returns false if invalid
 */
function getValidDate(date) {
    if (!date.match('today') && !date.match(dateRegex)) {
        return null;
    }
    var validDate = new Date(), validDateArray;
    if (!date.match('today')) {
        validDateArray = date.split('-');
        validDate.setFullYear(validDateArray[0]);
        validDate.setMonth(validDateArray[1] - 1);
        validDate.setDate(validDateArray[2]);
    }
    return validDate;
}
;
// }


/***/ }),

/***/ "./out/style.js":
/*!**********************!*\
  !*** ./out/style.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const formValidator_1 = __webpack_require__(/*! ./formValidator */ "./out/formValidator.js");
let elementId = "maishu-dilu-style";
if (!document.getElementById(elementId) && document.head != null) {
    let element = document.createElement('style');
    element.type = 'text/css';
    element.id = elementId;
    document.head.appendChild(element);
    element.innerHTML = `
    .${formValidator_1.FormValidator.errorClassName} {
        color: red;
        font-weight: bold;
    }
    `;
}


/***/ })

/******/ });
});
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./out/form-validator.js":
/*!*******************************!*\
  !*** ./out/form-validator.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.FormValidator = void 0;
const React = __webpack_require__(/*! react */ "react");
const value_validator_1 = __webpack_require__(/*! ./value-validator */ "./out/value-validator.js");
class FormValidator {
    constructor() {
        this._fieldValidators = [];
    }
    get fieldValidators() {
        return this._fieldValidators;
    }
    field(value, rules, conditionOrName, name) {
        let condition;
        if (typeof conditionOrName == "function") {
            condition = conditionOrName;
        }
        else {
            name = conditionOrName;
        }
        return React.createElement(value_validator_1.FieldValidator, { value: value, rules: rules, name: name, condition: condition, ref: e => {
                if (e == null || this._fieldValidators.indexOf(e) >= 0)
                    return;
                this._fieldValidators.push(e);
            } });
    }
    check() {
        let r = true;
        this._fieldValidators.forEach(c => {
            c.validateUndefineValue = true;
            if (c.check() == false)
                r = false;
        });
        return r;
    }
    clearErrors() {
        this._fieldValidators.forEach(c => {
            c.setState({ errorMessage: "" });
        });
    }
}
exports.FormValidator = FormValidator;


/***/ }),

/***/ "./out/index.js":
/*!**********************!*\
  !*** ./out/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.FormValidator = exports.FieldValidator = exports.rules = void 0;
var maishu_dilu_1 = __webpack_require__(/*! maishu-dilu */ "./node_modules/maishu-dilu/dist/index.js");
Object.defineProperty(exports, "rules", { enumerable: true, get: function () { return maishu_dilu_1.rules; } });
var value_validator_1 = __webpack_require__(/*! ./value-validator */ "./out/value-validator.js");
Object.defineProperty(exports, "FieldValidator", { enumerable: true, get: function () { return value_validator_1.FieldValidator; } });
var form_validator_1 = __webpack_require__(/*! ./form-validator */ "./out/form-validator.js");
Object.defineProperty(exports, "FormValidator", { enumerable: true, get: function () { return form_validator_1.FormValidator; } });


/***/ }),

/***/ "./out/value-validator.js":
/*!********************************!*\
  !*** ./out/value-validator.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.FieldValidator = void 0;
const maishu_dilu_1 = __webpack_require__(/*! maishu-dilu */ "./node_modules/maishu-dilu/dist/index.js");
const React = __webpack_require__(/*! react */ "react");
class FieldValidator extends React.Component {
    constructor() {
        super(...arguments);
        this._validateUndefineValue = false;
    }
    UNSAFE_componentWillReceiveProps(props) {
        this.validateValue(props);
    }
    check() {
        return this.checkValue(this.props);
    }
    get validateUndefineValue() {
        return this._validateUndefineValue;
    }
    set validateUndefineValue(value) {
        this._validateUndefineValue = value;
    }
    checkValue(props) {
        let { value, rules } = props;
        if (this.props.condition != null && this.props.condition() == false) {
            this.setState({ errorMessage: "" });
            return true;
        }
        let result = true;
        for (let i = 0; i < rules.length; i++) {
            var r = rules[i].validate(value);
            if (r === false) {
                let error = rules[i].error;
                let errorMessage;
                if (typeof error == "string") {
                    errorMessage = error;
                }
                else if (typeof error == "function") {
                    errorMessage = error();
                }
                else {
                    errorMessage = "Unknonw Error";
                }
                this.setState({ errorMessage });
            }
            else if (r === true) {
                this.setState({ errorMessage: "" });
            }
            else {
                throw new Error('Please use checkValueAsync method.');
            }
            if (r == false) {
                result = r;
                break;
            }
        }
        return result;
    }
    validateValue(props) {
        let { value, rules } = props;
        if (value === undefined && this.validateUndefineValue == false) {
            this.setState({ errorMessage: "" });
            return;
        }
        this.checkValue(props);
    }
    componentDidMount() {
        this.validateValue(this.props);
    }
    render() {
        let { errorMessage } = this.state || {};
        return React.createElement("span", { className: maishu_dilu_1.FormValidator.errorClassName, style: { display: errorMessage ? "block" : "none" } }, errorMessage);
    }
}
exports.FieldValidator = FieldValidator;


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_react__;

/***/ })

/******/ });
});
//# sourceMappingURL=index.js.map