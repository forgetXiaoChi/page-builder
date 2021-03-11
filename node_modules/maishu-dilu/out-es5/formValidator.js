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

var errors_1 = require("./errors");
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
