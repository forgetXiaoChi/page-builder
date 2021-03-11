"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Panel = void 0;

var errors_1 = require("./errors");

var Panel =
/*#__PURE__*/
function () {
  function Panel(element) {
    var _this = this;

    _classCallCheck(this, Panel);

    if (!element) throw errors_1.errors.argumentNull('element');
    this.build(element);
    var isIOS = navigator.userAgent.indexOf('iPhone') > 0 || navigator.userAgent.indexOf('iPad') > 0; //=====================================================================
    // 点击非窗口区域，关窗口。并禁用上级元素的 touch 操作。
    // let panel = this.panel; //this.refs['panel'] as HTMLElement;
    // let modalDialog = this.modalDialog; //this.refs['modalDialog'] as HTMLElement;

    this.panel.addEventListener('touchstart', function (event) {
      var dialogRect = _this.modalDialog.getBoundingClientRect();

      for (var i = 0; i < event.touches.length; i++) {
        var clientX = event.touches[i].clientX;

        if (clientX < dialogRect.left) {
          _this.hide();

          return;
        }
      }
    }); //=========================================================
    // 防止滚动面板时，事件穿透到面板底下的页面

    if (isIOS) {
      this.panel.addEventListener('touchstart', function (event) {
        var tagName = event.target.tagName;

        if (tagName == 'BUTTON' || tagName == 'INPUT' || tagName == 'A') {
          return;
        }

        event.stopPropagation();
        event.preventDefault();
      });
    } //=========================================================

  }

  _createClass(Panel, [{
    key: "build",
    value: function build(element) {
      this.panel = element;
      this.panel.className = 'panel';
      this.panel.style.display = 'none'; // document.body.appendChild(panel);

      this.panel.innerHTML = "\n            <div class=\"modal\">\n                <div class=\"modal-dialog\">\n                    <div class=\"modal-content\">\n                        <div class=\"modal-header\">\n    \n                        </div>\n                        <div class=\"modal-body\">\n    \n                        </div>\n                        <div class=\"modal-footer\">\n    \n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"modal-backdrop in\">\n            </div>\n        ";
      this.modal = this.panel.querySelector('.modal');
      this.backdrop = this.panel.querySelector('.modal-backdrop');
      this._header = this.panel.querySelector('.modal-header');
      this._footer = this.panel.querySelector('.modal-footer');
      this._body = this.panel.querySelector(".modal-body");
      this.modalDialog = this.panel.querySelector(".modal-dialog");
    }
  }, {
    key: "show",
    value: function show() {
      var _this2 = this;

      // args = args || {};
      this.panel.style.display = 'block';
      this.modal.style.display = 'block';
      setTimeout(function () {
        _this2.modal.style.transform = 'translateX(0)';
        _this2.backdrop.style.opacity = '0.5';
      }, 50);

      var setBodyHeight = function setBodyHeight() {
        var headerHeight = _this2._header.getBoundingClientRect().height;

        var footerHeight = _this2._footer.getBoundingClientRect().height;

        var bodyHeight = window.innerHeight - headerHeight - footerHeight;
        _this2._body.style.height = "".concat(bodyHeight, "px");
      };

      window.addEventListener('resize', function () {
        return setBodyHeight();
      });
      setBodyHeight(); // if (args.header)
      //     args.header(header);
      // if (args.body)
      //     args.body(body);
      // if (args.footer)
      //     args.footer(footer);
      // return {
      //     hide: () => hide()
      // }
    }
  }, {
    key: "hide",
    value: function hide() {
      var _this3 = this;

      this.modal.style.removeProperty('transform');
      this.backdrop.style.opacity = '0';
      window.setTimeout(function () {
        _this3.panel.style.display = 'none';
      }, 500);
    }
  }, {
    key: "header",
    get: function get() {
      return this._header;
    }
  }, {
    key: "body",
    get: function get() {
      return this._body;
    }
  }, {
    key: "footer",
    get: function get() {
      return this._footer;
    }
  }]);

  return Panel;
}();

exports.Panel = Panel;
//# sourceMappingURL=panel.js.map
