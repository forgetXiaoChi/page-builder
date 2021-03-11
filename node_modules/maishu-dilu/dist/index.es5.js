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
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["dilu"] = factory();
	else
		root["dilu"] = factory();
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./out-es5/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./out-es5/errors.js":
/*!***************************!*\
  !*** ./out-es5/errors.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.errors = void 0; // namespace dilu {

exports.errors = {
  argumentNull: function argumentNull(parameterName) {
    var msg = "Parameter ".concat(parameterName, " can not be null or empty.");
    return new Error(msg);
  },
  elementValidateRuleNotSet: function elementValidateRuleNotSet(element) {
    var msg = "\u5143\u7D20'".concat(element.name, "'\u6CA1\u6709\u8BBE\u7F6E\u9A8C\u8BC1\u89C4\u5219");
    return new Error(msg);
  },
  fieldElementCanntNull: function fieldElementCanntNull(fieldIndex) {
    // if (fieldIndex != null)
    var msg = fieldIndex != null ? "The element value in the field cannt be null, field index is ".concat(fieldIndex, ".") : "The element in the field is null";
    return new Error(msg);
  },
  elementNotExists: function elementNotExists(name) {
    var msg = "Element ".concat(name, " is not exits in the form.");
    return new Error(msg);
  },
  fieldResultExpectBooleanType: function fieldResultExpectBooleanType(name) {
    var msg = "Result of ".concat(name, " field is expected boolean.");
    return new Error(msg);
  }
}; // }
//# sourceMappingURL=errors.js.map


/***/ }),

/***/ "./out-es5/formValidator.js":
/*!**********************************!*\
  !*** ./out-es5/formValidator.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var __awaiter = void 0 && (void 0).__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }

  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FormValidator = void 0;

var errors_1 = __webpack_require__(/*! ./errors */ "./out-es5/errors.js");
/**
 * 表单验证器，用于对表单中的字段进行验证
 */


var FormValidator =
/*#__PURE__*/
function () {
  function FormValidator(form) {
    _classCallCheck(this, FormValidator);

    /** 输入框的值发生改变，是否重新校验该输入框的值，默认为 true */
    this.validateOnChanged = true;
    if (!form) throw errors_1.errors.argumentNull('form');

    for (var _len = arguments.length, fields = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      fields[_key - 1] = arguments[_key];
    }

    this.fields = fields || [];
    this.form = form;
    this.elementEvents = {};
  }

  _createClass(FormValidator, [{
    key: "appendField",
    value: function appendField(field) {
      this.fields.push(field);
    }
    /**
     * 清除表单的错误信息
     */

  }, {
    key: "clearErrors",
    value: function clearErrors() {
      this.fields.map(function (o) {
        return o.errorElement;
      }).filter(function (o) {
        return o != null;
      }).forEach(function (o) {
        return o.style.display = 'none';
      });
    }
    /**
     * 清除表单的指定元素错误信息
     * @param name 指定的元素名称
     */

  }, {
    key: "clearElementError",
    value: function clearElementError(name) {
      if (!name) throw errors_1.errors.argumentNull('name');
      var fields = this.fields.filter(function (o) {
        return o.name == name;
      });
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = fields[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var field = _step.value;
          var errorElement = this.fieldErrorElement(field);
          errorElement.style.display = 'none';
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return != null) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }
    }
    /**
     * 设置表单的指定元素错误信息
     * @param name 指定的元素名称
     * @param error 错误信息
     */

  }, {
    key: "setElementError",
    value: function setElementError(name, error) {
      if (!name) throw errors_1.errors.argumentNull('name');
      if (!error) throw errors_1.errors.argumentNull('error');
      var fields = this.fields.filter(function (o) {
        return o.name == name;
      });
      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = fields[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var field = _step2.value;
          var errorElement = this.fieldErrorElement(field);
          errorElement.style.removeProperty('display');
          errorElement.innerHTML = error;
        }
      } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
            _iterator2.return();
          }
        } finally {
          if (_didIteratorError2) {
            throw _iteratorError2;
          }
        }
      }
    }
  }, {
    key: "fieldElement",
    value: function fieldElement(field) {
      var name = field.name;
      var element = this.form.querySelectorAll("[name='".concat(name, "']"))[0];
      if (element == null) throw errors_1.errors.elementNotExists(name);
      return element;
    }
  }, {
    key: "fieldErrorElement",
    value: function fieldErrorElement(field) {
      if (!field.errorElement) {
        var errorElement = this.form.getElementsByClassName("".concat(FormValidator.errorClassName, " ").concat(field.name))[0];

        if (!errorElement) {
          var element = this.fieldElement(field);
          errorElement = document.createElement("span");
          errorElement.className = FormValidator.errorClassName;
          errorElement.style.display = 'none';
          if (element.nextSibling) element.parentElement.insertBefore(errorElement, element.nextSibling);else element.parentElement.appendChild(errorElement);
        }

        field.errorElement = errorElement;
      }

      return field.errorElement; // return errorElement;
    }
    /**
     * 验证字段
     */

  }, {
    key: "check",
    value: function check() {
      var ps = new Array();

      for (var i = 0; i < this.fields.length; i++) {
        var field = this.fields[i];
        var element = this.fieldElement(field);
        if (field.condition && field.condition(element) == false) continue;
        var p = this.checkField(field);
        ps.push(p);
      }

      var result = ps.filter(function (o) {
        return o == false;
      }).length == 0;
      return result;
    }
    /**
     * 异步验证字段
     */

  }, {
    key: "checkAsync",
    value: function checkAsync() {
      return __awaiter(this, void 0, void 0,
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee() {
        var ps, i, field, element, p, checkResults, result;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                ps = new Array();
                i = 0;

              case 2:
                if (!(i < this.fields.length)) {
                  _context.next = 12;
                  break;
                }

                field = this.fields[i];
                element = this.fieldElement(field);

                if (!(field.condition && field.condition(element) == false)) {
                  _context.next = 7;
                  break;
                }

                return _context.abrupt("continue", 9);

              case 7:
                p = this.checkFieldAsync(field);
                ps.push(p);

              case 9:
                i++;
                _context.next = 2;
                break;

              case 12:
                _context.next = 14;
                return Promise.all(ps);

              case 14:
                checkResults = _context.sent;
                result = checkResults.filter(function (o) {
                  return o == false;
                }).length == 0;
                return _context.abrupt("return", result);

              case 17:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));
    }
  }, {
    key: "bindElementEvent",
    value: function bindElementEvent(field, isAsync) {
      var _this = this;

      if (this.elementEvents[field.name]) {
        return;
      }

      var element = this.fieldElement(field);

      var validateFunc = function () {
        var checking = false;
        return function () {
          if (checking) return;
          checking = true; // isAsync ? this.checkFieldAsync(field) : this.checkField(field);

          if (isAsync) {
            _this.checkFieldAsync(field).then(function () {
              return checking = false;
            }).catch(function () {
              return checking = false;
            });
          } else {
            _this.checkField(field);

            checking = false;
          }
        };
      }();

      if (this.validateOnChanged) {
        element.addEventListener('change', validateFunc);
        var elementType = element.type || "text";

        if (elementType == "text" || elementType == "password") {
          element.addEventListener('keyup', validateFunc);
        } else if (elementType == "radio") {
          var name = element.name;
          var elements = this.form.querySelectorAll("[name='".concat(name, "']"));

          for (var i = 0; i < elements.length; i++) {
            if (elements[i] == element) {
              continue;
            }

            elements[i].addEventListener("change", validateFunc);
          }
        }
      }

      this.elementEvents[field.name] = true;
    }
  }, {
    key: "checkField",
    value: function checkField(field) {
      this.bindElementEvent(field, false);
      var element = this.fieldElement(field);
      var depends = field.depends || [];

      for (var j = 0; j < depends.length; j++) {
        var dependResult = depends[j](element);

        if (_typeof(dependResult) == 'object') {
          throw new Error('Please use checkAsync method.');
        }

        var dependIsOK = dependResult;
        if (!dependIsOK) return false;
      }

      for (var _j = 0; _j < field.rules.length; _j++) {
        var rule = field.rules[_j];

        var _element = this.fieldElement(field);

        if (_element == null) throw errors_1.errors.fieldElementCanntNull();
        var value = this.elementValue(_element);
        var isPass = rule.validate(value);

        if (_typeof(isPass) == 'object') {
          throw new Error('Please use checkAsync method.');
        }

        this.showElement(!isPass, field, rule, _element);
        if (!isPass) return false;
      }

      return true;
    }
  }, {
    key: "checkFieldAsync",
    value: function checkFieldAsync(field) {
      return __awaiter(this, void 0, void 0,
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee2() {
        var element, depends, j, dependResult, dependIsOK, _j2, rule, _element2, value, p, isPass;

        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                this.bindElementEvent(field, true);
                element = this.fieldElement(field);
                depends = field.depends || [];
                j = 0;

              case 4:
                if (!(j < depends.length)) {
                  _context2.next = 15;
                  break;
                }

                dependResult = depends[j](element);

                if (typeof dependResult == 'boolean') {
                  dependResult = Promise.resolve(dependResult);
                }

                _context2.next = 9;
                return dependResult;

              case 9:
                dependIsOK = _context2.sent;

                if (dependIsOK) {
                  _context2.next = 12;
                  break;
                }

                return _context2.abrupt("return", false);

              case 12:
                j++;
                _context2.next = 4;
                break;

              case 15:
                _j2 = 0;

              case 16:
                if (!(_j2 < field.rules.length)) {
                  _context2.next = 33;
                  break;
                }

                rule = field.rules[_j2];
                _element2 = this.fieldElement(field);

                if (!(_element2 == null)) {
                  _context2.next = 21;
                  break;
                }

                throw errors_1.errors.fieldElementCanntNull();

              case 21:
                value = this.elementValue(_element2);
                p = rule.validate(value);

                if (typeof p == 'boolean') {
                  p = Promise.resolve(p);
                }

                _context2.next = 26;
                return p;

              case 26:
                isPass = _context2.sent;
                this.showElement(!isPass, field, rule, _element2);

                if (isPass) {
                  _context2.next = 30;
                  break;
                }

                return _context2.abrupt("return", false);

              case 30:
                _j2++;
                _context2.next = 16;
                break;

              case 33:
                return _context2.abrupt("return", true);

              case 34:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));
    }
  }, {
    key: "showElement",
    value: function showElement(display, field, rule, element) {
      var errorElement = this.fieldErrorElement(field);
      console.assert(errorElement != null, 'errorElement cannt be null.');

      if (rule.error != null) {
        errorElement = field.errorElement;
        var name = this.elementName(element);
        var errorText = typeof rule.error == 'string' ? rule.error : rule.error() || '';
        errorElement.innerHTML = errorText.replace('%s', name);
      }

      if (display) {
        errorElement.style.removeProperty('display');
      } else {
        errorElement.style.display = 'none';
      }
    }
    /**
     * 异步验证 HTML 元素
     * @param name HTML 元素名称
     */

  }, {
    key: "checkElementAsync",
    value: function checkElementAsync(name) {
      var field = this.fields.filter(function (o) {
        return o.name == name;
      })[0];
      if (!field) throw errors_1.errors.elementNotExists(name);
      return this.checkFieldAsync(field);
    }
    /**
     * 同步验证 HTML 元素
     * @param name HTML 元素名称
     */

  }, {
    key: "checkElement",
    value: function checkElement(name) {
      var field = this.fields.filter(function (o) {
        return o.name == name;
      })[0];
      if (!field) throw errors_1.errors.elementNotExists(name);
      return this.checkField(field);
    }
  }, {
    key: "elementValue",
    value: function elementValue(element) {
      if (element.tagName == "TEXTAREA") {
        return element.value;
      }

      var inputElement = element;

      if (inputElement.type == "radio") {
        var elements = this.form.querySelectorAll("[name='".concat(inputElement.name, "']"));

        for (var i = 0; i < elements.length; i++) {
          if (elements[i].checked) {
            return elements[i].value;
          }
        }

        return "";
      }

      return element.value;
    }
  }, {
    key: "elementName",
    value: function elementName(element) {
      if (element.tagName == "TEXTAREA") {
        return element.name;
      }

      return element.name;
    }
  }]);

  return FormValidator;
}();

exports.FormValidator = FormValidator;
FormValidator.errorClassName = 'validationMessage'; // }
//# sourceMappingURL=formValidator.js.map


/***/ }),

/***/ "./out-es5/index.js":
/*!**************************!*\
  !*** ./out-es5/index.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.rules = exports.FormValidator = void 0;

var formValidator_1 = __webpack_require__(/*! ./formValidator */ "./out-es5/formValidator.js");

Object.defineProperty(exports, "FormValidator", {
  enumerable: true,
  get: function get() {
    return formValidator_1.FormValidator;
  }
});

var rules_1 = __webpack_require__(/*! ./rules */ "./out-es5/rules.js");

Object.defineProperty(exports, "rules", {
  enumerable: true,
  get: function get() {
    return rules_1.rules;
  }
});

__webpack_require__(/*! ./style */ "./out-es5/style.js");
//# sourceMappingURL=index.js.map


/***/ }),

/***/ "./out-es5/rules.js":
/*!**************************!*\
  !*** ./out-es5/rules.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.rules = void 0; // namespace dilu {

var ruleRegex = /^(.+?)\[(.+)\]$/,
    numericRegex = /^[0-9]+$/,
    integerRegex = /^\-?[0-9]+$/,
    decimalRegex = /^\-?[0-9]*\.?[0-9]+$/,
    emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
    alphaRegex = /^[a-z]+$/i,
    alphaNumericRegex = /^[a-z0-9]+$/i,
    alphaDashRegex = /^[a-z0-9_\-]+$/i,
    naturalRegex = /^[0-9]+$/i,
    naturalNoZeroRegex = /^[1-9][0-9]*$/i,
    ipRegex = /^((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){3}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})$/i,
    base64Regex = /[^a-zA-Z0-9\/\+=]/i,
    numericDashRegex = /^[\d\-\s]+$/,
    urlRegex = /^((http|https):\/\/(\w+:{0,1}\w*@)?(\S+)|)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?$/,
    mobileRegex = /^1[34578]\d{9}$/,
    dateRegex = /\d{4}-\d{1,2}-\d{1,2}/;
var msgs = {
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
  custom: '请输入正确制'
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
  required: function required(error) {
    var validate = function validate(value) {
      return (value || "") != '';
    };

    return createValidation(validate, error || msgs.required);
  },

  /**
   * 验证两个字段值是否相等
   * @param otherElement 另外一个字段
   * @param error 错误提示文字
   */
  matches: function matches(otherElement, error) {
    var validate = function validate(value) {
      return value == otherElement.value;
    };

    return createValidation(validate, error || msgs.required);
  },

  /**
   * 验证邮箱
   * @param error 错误提示文字
   */
  email: function email(error) {
    var validate = function validate(value) {
      return emailRegex.test(value);
    };

    return createValidation(validate, error || msgs.required);
  },

  /**
   * 验证字段最小长度
   * @param length 最小长度
   * @param error 错误提示文字
   */
  minLength: function minLength(length, error) {
    var validate = function validate(value) {
      return (value || '').length >= calc(length);
    };

    return createValidation(validate, error || msgs.minLength);
  },

  /**
   * 验证字段的最大长度
   * @param length 最大长度
   * @param error 错误提示文字
   */
  maxLength: function maxLength(length, error) {
    var validate = function validate(value) {
      return (value || '').length <= calc(length);
    };

    return createValidation(validate, error || msgs.matches);
  },

  /**
   * 验证字段大于指定的值
   * @param value 指定的值
   * @param error 错误提示文字
   */
  greaterThan: function greaterThan(value, error) {
    var validate = function validate(o) {
      return elementValueCompare(o, calc(value)) == 'greaterThan';
    };

    return createValidation(validate, error || msgs.greater_than);
  },

  /**
   * 验证字段小于指定的值
   * @param value 指定的值
   * @param error 错误提示文字
   */
  lessThan: function lessThan(value, error) {
    var validate = function validate(o) {
      return elementValueCompare(o, calc(value)) == 'lessThan';
    };

    return createValidation(validate, error || msgs.less_than);
  },

  /**
   * 验证字段等于指定的值
   * @param value 指定的值
   * @param error 错误提示文字
   */
  equal: function equal(value, error) {
    var validate = function validate(o) {
      return elementValueCompare(o, calc(value)) == 'equal';
    };

    return createValidation(validate, error || msgs.equal);
  },

  /**
   * 验证字段为 IP
   * @param error 错误提示文字
   */
  ip: function ip(error) {
    var validate = function validate(value) {
      return ipRegex.test(value);
    };

    return createValidation(validate, error || msgs.ip);
  },

  /**
   * 验证字段为 URL
   * @param error 错误提示文字
   */
  url: function url(error) {
    var validate = function validate(value) {
      return urlRegex.test(value);
    };

    return createValidation(validate, error || msgs.valid_url);
  },

  /**
   * 验证字段为手机号码
   * @param error 错误提示文字
   */
  mobile: function mobile(error) {
    var validate = function validate(value) {
      return mobileRegex.test(value);
    };

    return createValidation(validate, error || msgs.mobile);
  },

  /**
   * 验证字段为数字
   * @param error 错误提示文字
   */
  numeric: function numeric(error) {
    var validate = function validate(value) {
      return numericRegex.test(value);
    };

    return createValidation(validate, error || msgs.numeric);
  },

  /**
   * 自定义验证
   * @param validate 自定义验证的方法
   * @param error 错误提示文字
   */
  custom: function custom(validate, error) {
    return createValidation(validate, error || msgs.custom);
  }
};

function elementValueCompare(value, otherValue) {
  var elementValue;

  if (typeof otherValue == 'number') {
    elementValue = decimalRegex.test(value) ? parseFloat(value) : null;
  } else if (typeof otherValue == 'string') {
    elementValue = value;
  } else {
    elementValue = getValidDate(value);
  }

  if (elementValue < otherValue) return 'lessThan';else if (elementValue > otherValue) return 'greaterThan';else return 'equal';
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

  var validDate = new Date(),
      validDateArray;

  if (!date.match('today')) {
    validDateArray = date.split('-');
    validDate.setFullYear(validDateArray[0]);
    validDate.setMonth(validDateArray[1] - 1);
    validDate.setDate(validDateArray[2]);
  }

  return validDate;
}

; // }
//# sourceMappingURL=rules.js.map


/***/ }),

/***/ "./out-es5/style.js":
/*!**************************!*\
  !*** ./out-es5/style.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var formValidator_1 = __webpack_require__(/*! ./formValidator */ "./out-es5/formValidator.js");

var elementId = "maishu-dilu-style";

if (!document.getElementById(elementId) && document.head != null) {
  var element = document.createElement('style');
  element.type = 'text/css';
  element.id = elementId;
  document.head.appendChild(element);
  element.innerHTML = "\n    .".concat(formValidator_1.FormValidator.errorClassName, " {\n        color: red;\n        font-weight: bold;\n    }\n    ");
}
//# sourceMappingURL=style.js.map


/***/ })

/******/ });
});
//# sourceMappingURL=index.es5.js.map