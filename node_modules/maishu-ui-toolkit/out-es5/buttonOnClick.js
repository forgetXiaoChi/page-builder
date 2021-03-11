"use strict";

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
exports.buttonOnClick = void 0;

var dialog_1 = require("./dialog");

function buttonOnClick(arg1, arg2, arg3) {
  var _this = this;

  var element;
  var callback;
  var args;

  if (typeof arg1 == 'function') {
    callback = arg1;
    args = arg2;
  } else if (typeof arg2 == 'function') {
    element = arg1;
    callback = arg2;
    args = arg3;
  } else {
    throw new Error("Arguments error");
  }

  args = args || {};

  var execute = function execute(event) {
    return __awaiter(_this, void 0, void 0,
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee() {
      var button;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              button = event.currentTarget;
              button.setAttribute('disabled', '');
              _context.prev = 2;
              _context.next = 5;
              return callback(event);

            case 5:
              if (args.toast) {
                dialog_1.toast(args.toast);
              }

              _context.next = 12;
              break;

            case 8:
              _context.prev = 8;
              _context.t0 = _context["catch"](2);
              console.error(_context.t0);
              throw _context.t0;

            case 12:
              _context.prev = 12;
              button.removeAttribute('disabled');
              return _context.finish(12);

            case 15:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[2, 8, 12, 15]]);
    }));
  };

  var result = function result(event) {
    event.stopPropagation();
    event.cancelBubble = true;

    if (!args.confirm) {
      execute(event);
      return;
    }

    var text = typeof args.confirm == 'string' ? args.confirm : args.confirm();
    dialog_1.confirm({
      message: text,
      confirm: function confirm(event) {
        return execute(event);
      }
    });
  };

  if (element) element.onclick = result;
  return result;
}

exports.buttonOnClick = buttonOnClick;
//# sourceMappingURL=buttonOnClick.js.map
