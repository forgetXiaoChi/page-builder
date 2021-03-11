"use strict";

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
exports.Less = void 0;

var less = require("less");

var errors_1 = require("./errors");

var Less =
/*#__PURE__*/
function () {
  function Less() {
    _classCallCheck(this, Less);
  }

  _createClass(Less, null, [{
    key: "pathname",
    value: function pathname(url) {
      var el = document.createElement('a');
      el.href = url;
      return el.pathname;
    }
  }, {
    key: "load",
    value: function load(url, options) {
      return __awaiter(this, void 0, void 0,
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee() {
        var _options, wrapperClassName, name, _location, protocol, host, pathname, res, text;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                options = options || {};
                _options = options, wrapperClassName = _options.wrapperClassName, name = _options.name;

                if (!options.baseUrl) {
                  _location = location, protocol = _location.protocol, host = _location.host;
                  pathname = Less.pathname(url);
                  console.assert(pathname[0] == "/");
                  options.baseUrl = "".concat(protocol, "//").concat(host).concat(pathname);
                }

                _context.next = 5;
                return fetch(url);

              case 5:
                res = _context.sent;
                _context.next = 8;
                return res.text();

              case 8:
                text = _context.sent;

                if (wrapperClassName) {
                  text = ".".concat(wrapperClassName, " {").concat(text, "}");
                }

                Less.renderByText(text, options);

              case 11:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));
    }
  }, {
    key: "renderByRequireJS",
    value: function renderByRequireJS(moduleName, options) {
      return __awaiter(this, void 0, void 0,
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee2() {
        var req;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                options = options || {};

                if (options.contextName) {
                  req = requirejs({
                    context: options.contextName
                  });
                } else {
                  req = requirejs;
                }

                req(["text!".concat(moduleName)], function (str) {
                  console.assert(str);
                  Less.renderByText(str, options);
                });

              case 3:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));
    }
  }, {
    key: "renderByText",
    value: function renderByText(lessText, options) {
      return __awaiter(this, void 0, void 0,
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee3() {
        var extractUrlParts;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                if (lessText) {
                  _context3.next = 2;
                  break;
                }

                throw errors_1.errors.argumentNull("lessText");

              case 2:
                if (!(typeof lessText != "string")) {
                  _context3.next = 4;
                  break;
                }

                throw errors_1.errors.argumentTypeIncorrect("lessText", "string");

              case 4:
                options = options || {};

                if (options.baseUrl) {
                  extractUrlParts = less.FileManager.prototype.extractUrlParts;

                  less.FileManager.prototype.extractUrlParts = function (url) {
                    return extractUrlParts.apply(less, [url, options.baseUrl]);
                  };
                }

                less.render(lessText, function (e, result) {
                  if (e) {
                    console.error(e);
                    return;
                  }

                  var styleElement = null;
                  var name = options.name;

                  if (name) {
                    console.assert(document.head != null);
                    var head = document.head;
                    styleElement = head.querySelector("style[data-name=\"".concat(name, "\"]"));
                  }

                  if (styleElement == null) {
                    styleElement = document.createElement('style');
                    document.head.appendChild(styleElement);
                    if (name) styleElement.setAttribute("data-name", name);
                  }

                  styleElement.innerText = result.css;
                });

              case 7:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));
    }
  }, {
    key: "parse",
    value: function parse(lessText) {
      return new Promise(function (resolve, reject) {
        less.render(lessText, function (e, result) {
          if (e) {
            reject(e);
            return;
          }

          resolve(result.css);
        });
      });
    }
  }]);

  return Less;
}();

exports.Less = Less;
//# sourceMappingURL=less.js.map
