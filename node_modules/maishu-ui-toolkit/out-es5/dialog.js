"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.showPanel = exports.toast = exports.showToastMessage = exports.confirm = exports.alert = exports.hideDialog = exports.showDialog = exports.dialogConfig = void 0;

var errors_1 = require("./errors");

function dialogContainer() {
  return exports.dialogConfig.dialogContainer || document.body;
}

exports.dialogConfig = {
  dialogContainer: null
};

function addClassName(element, className) {
  console.assert(className != null, 'class is null');
  var c1 = (element.className || '').split(/\s+/);
  var c2 = className.split(/\s+/);
  var itemsToAdd = c2.filter(function (o) {
    return c1.indexOf(o) < 0;
  });
  c1.push.apply(c1, _toConsumableArray(itemsToAdd));
  element.className = c1.join(' ');
}

function removeClassName(element, className) {
  console.assert(className != null, 'class is null');
  var c1 = (element.className || '').split(/\s+/);
  var c2 = className.split(/\s+/);
  var itemsRemain = c1.filter(function (o) {
    return c2.indexOf(o) < 0;
  });
  element.className = itemsRemain.join(' ');
}

var dialogElements = new Array();
var dialogCallbacks = new Array();
/** 弹窗
 * @param element bootstrap 的 modal 元素
 */

function showDialog(element, callback) {
  removeClassName(element, 'out');
  element.style.display = 'block';
  setTimeout(function () {
    addClassName(element, 'modal fade in');
  }, 100);
  var dialogIndex = dialogElements.indexOf(element);

  if (dialogIndex < 0) {
    dialogElements.push(element);
    dialogIndex = dialogElements.length - 1;
    var closeButtons = element.querySelectorAll('[data-dismiss="modal"]') || [];

    for (var i = 0; i < closeButtons.length; i++) {
      closeButtons[i].onclick = function () {
        return hideDialog(element);
      };
    }

    var allButtons = element.querySelectorAll('button');

    for (var _i = 0; _i < allButtons.length; _i++) {
      allButtons.item(_i).addEventListener('click', function (event) {
        var callback = dialogCallbacks[dialogIndex];

        if (callback) {
          callback(event.currentTarget);
        }
      });
    }
  }

  dialogCallbacks[dialogIndex] = callback;
  element.tabIndex = 1;
  var firstField = element.querySelector('input:not([type]),input:not([readonly])[type="text"],input:not([readonly])[type="password"]');

  if (firstField) {
    firstField.focus();
  } else {
    element.focus();
  }

  element.addEventListener('keydown', on_keydown);
}

exports.showDialog = showDialog;

function hideDialog(element) {
  removeClassName(element, 'in');
  addClassName(element, 'modal fade out');
  element.removeEventListener('keydown', on_keydown);
  return new Promise(function (reslove, reject) {
    setTimeout(function () {
      element.style.removeProperty('display');
      reslove({});
    }, 1000);
  });
}

exports.hideDialog = hideDialog;

function on_keydown(event) {
  var KEY_CODE_ESC = 27;

  if (event.keyCode == KEY_CODE_ESC) {
    var dialogElement = findDialogElement(event.target);
    console.assert(dialogElement != null);
    if (dialogElement.getAttribute('data-keyboard') == 'false') return;
    hideDialog(dialogElement);
  }
}

function findDialogElement(e) {
  while (e) {
    var names = e.className.split(' ').filter(function (o) {
      return o;
    });
    if (names.indexOf('modal') >= 0) return e;
    e = e.parentElement;
  }
}

function alert(args) {
  var elementId = "AA0321E3-B2E4-4971-99D8-BF2FF66748F2";
  var element = document.getElementById(elementId);

  if (element == null) {
    element = document.createElement('div');
    element.id = elementId;
    dialogContainer().appendChild(element);
    element.innerHTML = "\n            <div class=\"modal-dialog\">\n                \n                <div class=\"modal-content\">\n                    <div class=\"modal-header\">\n                        <button type=\"button\" class=\"btn close\" data-dismiss=\"modal\">\n                            <span aria-hidden=\"true\">&times;</span><span class=\"sr-only\">Close</span>\n                        </button>\n                        <h4 class=\"modal-title\"></h4>\n                    </div>\n                    <div class=\"modal-body\">\n                        <h5></h5>\n                    </div>\n                    <div class=\"modal-footer\">\n                        <button name=\"ok\" type=\"button\" class=\"btn btn-primary\">\n                        </button>\n                    </div>\n                </div>\n            </div>\n        ";
  }

  if (typeof args == 'string') {
    args = {
      title: '&nbsp;',
      message: args
    };
  }

  showDialog(element);
  var titleElement = element.querySelector('.modal-title');
  titleElement.innerHTML = args.title;
  var bodyElement = element.querySelector('.modal-body');
  bodyElement.innerHTML = args.message;
  var modalFooter = element.querySelector('.modal-footer');
  var okButton = modalFooter.querySelector('[name="ok"]');
  okButton.innerHTML = args.confirmText || "确定";

  okButton.onclick = function () {
    return hideDialog(element);
  };
}

exports.alert = alert;

function confirm(args) {
  var title;
  var message;
  var execute = args.confirm;

  var cancel = args.cancle || function () {
    return Promise.resolve();
  };

  var container = args.container || document.body;
  var confirmText = args.confirmText || '确定';
  var cancelText = args.cancelText || '取消';

  if (typeof args == 'string') {
    message = args;
  } else {
    title = args.title;
    message = args.message;
  }

  var elementId = "C3139D58-75F7-47B2-AEC4-76C3658848A0";
  var confirmDialogElment = document.getElementById(elementId);

  if (confirmDialogElment == null) {
    confirmDialogElment = document.createElement('div');
    confirmDialogElment.id = elementId;
    confirmDialogElment.className = 'modal fade';
    confirmDialogElment.style.marginTop = '20px';
    console.assert(dialogContainer != null, 'dialog container is null');
    confirmDialogElment.innerHTML = "\n        <div class=\"modal-dialog\">\n            <div class=\"modal-content\">\n                <div class=\"modal-header\">\n                    <button type=\"button\" class=\"btn close\" data-dismiss=\"modal\">\n                        <span aria-hidden=\"true\">&times;</span><span class=\"sr-only\">Close</span>\n                    </button>\n                    <h4 class=\"modal-title\">\u786E\u8BA4</h4>\n                </div>\n                <div class=\"modal-body form-horizontal\">\n                   \n                </div>\n                <div class=\"modal-footer\">\n                    <button name=\"cancel\" type=\"button\" class=\"btn btn-default\">\n           \n                    </button>\n                    <button name=\"ok\" type=\"button\" class=\"btn btn-primary\">\n        \n                    </button>\n                </div>\n            </div>\n        </div>\n    ";
    dialogContainer().appendChild(confirmDialogElment);
  }

  var cancelElement = confirmDialogElment.querySelector('[name="cancel"]');
  cancelElement.innerHTML = cancelText;
  var okElement = confirmDialogElment.querySelector('[name="ok"]');
  okElement.innerHTML = confirmText;
  var modalHeader = confirmDialogElment.querySelector('.modal-header');
  var modalBody = confirmDialogElment.querySelector('.modal-body');
  var modalFooter = confirmDialogElment.querySelector('.modal-footer');
  modalBody.innerHTML = "<h5>".concat(message, "</h5>");

  if (title) {
    modalHeader.querySelector('h4').innerHTML = title;
  }

  var cancelButton = modalFooter.querySelector('[name="cancel"]');
  var okButton = modalFooter.querySelector('[name="ok"]');
  var closeButton = modalHeader.querySelector('.close');

  closeButton.onclick = cancelButton.onclick = function () {
    cancel().then(function () {
      return hideDialog(confirmDialogElment);
    }).then(function () {
      confirmDialogElment.remove();
    });
  };

  okButton.onclick = function (event) {
    execute(event).then(function () {
      return hideDialog(confirmDialogElment);
    }).then(function () {
      confirmDialogElment.remove();
    }).catch(function () {
      return hideDialog(confirmDialogElment);
    });
  };

  showDialog(confirmDialogElment);
}

exports.confirm = confirm;
exports.showToastMessage = toast;

function toast(obj) {
  if (obj == null) throw errors_1.errors.argumentNull('obj');
  var msg;
  var title;

  if (_typeof(obj) == 'object') {
    if (obj.tagName == null) {
      var options = obj;
      msg = options.message;
      title = options.title;
    } else {
      msg = obj;
    }
  } else {
    msg = obj;
  }

  var dialogContainer = exports.dialogConfig.dialogContainer || document.body;
  var toastDialogElement = document.createElement('div');
  toastDialogElement.className = 'modal fade in';
  toastDialogElement.style.marginTop = '20px';
  console.assert(dialogContainer != null, 'dialog container is null.');
  dialogContainer.appendChild(toastDialogElement);
  var header = title ? "<div class=\"modal-header\">\n                                    <h4 class=\"modal-title\">".concat(title, "</h4>\n                               </div>") : '';
  toastDialogElement.innerHTML = "\n                        <div class=\"modal-dialog\">\n                            <div class=\"modal-content\">\n                                ".concat(header, "\n                                <div class=\"modal-body form-horizontal\">\n                                </div>\n                            </div>\n                        </div>\n                    ");
  var modalBody = toastDialogElement.querySelector('.modal-body');
  console.assert(modalBody != null);

  if (typeof msg == 'string') {
    modalBody.innerHTML = "<h5>".concat(msg, "</h5>");
  } else if (typeof msg == 'function') {
    modalBody.innerHTML = "<h5>".concat(msg(), "</h5>");
  } else modalBody.appendChild(msg); // let dialog = new Dialog(toastDialogElement);
  // dialog.show();


  showDialog(toastDialogElement);
  setTimeout(function () {
    hideDialog(toastDialogElement).then(function () {
      toastDialogElement.remove();
    });
  }, 500);
}

exports.toast = toast;

exports.showPanel = function () {
  var panel = document.createElement('div');
  panel.className = 'mobile-page panel';
  panel.style.display = 'none';
  document.body.appendChild(panel);
  panel.innerHTML = "\n            <div class=\"modal\">\n                <div class=\"modal-dialog\">\n                    <div class=\"modal-content\">\n                        <div class=\"modal-header\">\n    \n                        </div>\n                        <div class=\"modal-body\">\n    \n                        </div>\n                        <div class=\"modal-footer\">\n    \n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"modal-backdrop in\">\n            </div>\n        ";
  var modal = panel.querySelector('.modal');
  var backdrop = panel.querySelector('.modal-backdrop');
  var header = panel.querySelector('.modal-header');
  var footer = panel.querySelector('.modal-footer');
  var body = panel.querySelector(".modal-body");
  var modalDialog = panel.querySelector(".modal-dialog");
  var isIOS = navigator.userAgent.indexOf('iPhone') > 0 || navigator.userAgent.indexOf('iPad') > 0; //=====================================================================
  // 点击非窗口区域，关窗口。并禁用上级元素的 touch 操作。
  // let panel = this.panel; //this.refs['panel'] as HTMLElement;
  // let modalDialog = this.modalDialog; //this.refs['modalDialog'] as HTMLElement;

  panel.addEventListener('touchstart', function (event) {
    var dialogRect = modalDialog.getBoundingClientRect();

    for (var i = 0; i < event.touches.length; i++) {
      var clientX = event.touches[i].clientX;

      if (clientX < dialogRect.left) {
        _hide();

        return;
      }
    }
  });

  if (isIOS) {
    panel.addEventListener('touchstart', function (event) {
      var tagName = event.target.tagName;

      if (tagName == 'BUTTON' || tagName == 'INPUT' || tagName == 'A') {
        return;
      }

      event.stopPropagation();
      event.preventDefault();
    });
  }

  function _hide() {
    modal.style.removeProperty('transform');
    backdrop.style.opacity = '0';
    window.setTimeout(function () {
      panel.style.display = 'none';
    }, 500);
  }

  return function showPanel(args) {
    args = args || {};
    panel.style.display = 'block';
    modal.style.display = 'block';
    setTimeout(function () {
      modal.style.transform = 'translateX(0)';
      backdrop.style.opacity = '0.5';
    }, 50);

    var setBodyHeight = function setBodyHeight() {
      var headerHeight = header.getBoundingClientRect().height;
      var footerHeight = footer.getBoundingClientRect().height;
      var bodyHeight = window.innerHeight - headerHeight - footerHeight;
      body.style.height = "".concat(bodyHeight, "px");
    };

    window.addEventListener('resize', function () {
      return setBodyHeight();
    });
    setBodyHeight();
    if (args.header) args.header(header);
    if (args.body) args.body(body);
    if (args.footer) args.footer(footer);
    return {
      hide: function hide() {
        return _hide();
      }
    };
  };
}();
//# sourceMappingURL=dialog.js.map
