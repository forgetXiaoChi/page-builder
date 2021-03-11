"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Less = exports.fileToBase64 = exports.imageFileToBase64 = exports.loadImageConfig = exports.renderImage = exports.generateImageBase64 = exports.dialogConfig = exports.confirm = exports.alert = exports.toast = exports.hideDialog = exports.showDialog = exports.buttonOnClick = void 0;

var buttonOnClick_1 = require("./buttonOnClick");

Object.defineProperty(exports, "buttonOnClick", {
  enumerable: true,
  get: function get() {
    return buttonOnClick_1.buttonOnClick;
  }
});

var dialog_1 = require("./dialog");

Object.defineProperty(exports, "showDialog", {
  enumerable: true,
  get: function get() {
    return dialog_1.showDialog;
  }
});
Object.defineProperty(exports, "hideDialog", {
  enumerable: true,
  get: function get() {
    return dialog_1.hideDialog;
  }
});
Object.defineProperty(exports, "toast", {
  enumerable: true,
  get: function get() {
    return dialog_1.toast;
  }
});
Object.defineProperty(exports, "alert", {
  enumerable: true,
  get: function get() {
    return dialog_1.alert;
  }
});
Object.defineProperty(exports, "confirm", {
  enumerable: true,
  get: function get() {
    return dialog_1.confirm;
  }
});
Object.defineProperty(exports, "dialogConfig", {
  enumerable: true,
  get: function get() {
    return dialog_1.dialogConfig;
  }
});

var image_1 = require("./image");

Object.defineProperty(exports, "generateImageBase64", {
  enumerable: true,
  get: function get() {
    return image_1.generateImageBase64;
  }
});
Object.defineProperty(exports, "renderImage", {
  enumerable: true,
  get: function get() {
    return image_1.renderImage;
  }
});
Object.defineProperty(exports, "loadImageConfig", {
  enumerable: true,
  get: function get() {
    return image_1.loadImageConfig;
  }
});
Object.defineProperty(exports, "imageFileToBase64", {
  enumerable: true,
  get: function get() {
    return image_1.imageFileToBase64;
  }
});
Object.defineProperty(exports, "fileToBase64", {
  enumerable: true,
  get: function get() {
    return image_1.fileToBase64;
  }
});

var less_1 = require("./less");

Object.defineProperty(exports, "Less", {
  enumerable: true,
  get: function get() {
    return less_1.Less;
  }
});
//# sourceMappingURL=index.js.map
