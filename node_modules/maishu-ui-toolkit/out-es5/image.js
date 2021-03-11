"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fileToBase64 = exports.imageFileToBase64 = exports.renderImage = exports.generateImageBase64 = exports.loadImageConfig = void 0;

var errors_1 = require("./errors");

exports.loadImageConfig = {
  /** 图片显示的文字 */
  imageDisaplyText: ''
};
var config = exports.loadImageConfig;
var draws = {
  text: function text(imageText, options) {
    return function (ctx, canvasWidth, canvasHeight) {
      // let fontSize1 = Math.floor(canvasHeight / 3 * 0.8);
      var fontSize = Math.floor(canvasWidth / imageText.length * 0.6);
      var bgColor = 'whitesmoke';
      var textColor = '#999'; // let fontSize = Math.min(fontSize1, fontSize2);

      options = Object.assign({
        fontSize: fontSize,
        bgColor: bgColor,
        textColor: textColor
      }, options);
      ctx.fillStyle = options.bgColor; //'whitesmoke';

      ctx.fillRect(0, 0, canvasWidth, canvasHeight); // 设置字体

      ctx.font = "Bold ".concat(options.fontSize, "px Arial"); // 设置对齐方式

      ctx.textAlign = "left"; // 设置填充颜色

      ctx.fillStyle = options.textColor; //"#999";

      var textWidth = fontSize * imageText.length;
      var startX = Math.floor((canvasWidth - textWidth) * 0.5);
      var startY = Math.floor((canvasHeight - options.fontSize) * 0.3); // 设置字体内容，以及在画布上的位置

      ctx.fillText(imageText, startX, Math.floor(canvasHeight * 0.6));
    };
  }
};

function generateImageBase64(width, height, obj, options) {
  var canvas = document.createElement('canvas');
  canvas.width = width; //img_width;

  canvas.height = height; //img_height;

  var ctx = canvas.getContext('2d');
  var draw = typeof obj == 'string' ? draws.text(obj, options) : obj;
  draw(ctx, width, height);
  return canvas.toDataURL();
}

exports.generateImageBase64 = generateImageBase64;
var PREVIEW_IMAGE_DEFAULT_WIDTH = 200;
var PREVIEW_IMAGE_DEFAULT_HEIGHT = 200;
/**
 * 在 IMG 元素上渲染图片
 * @param element 要渲染的 IMG 元素
 * @param options 渲染选项，默认将 IMG 元素的 SRC 属性渲染出来
 */

function renderImage(element, options) {
  options = options || {};
  if (!element) throw errors_1.errors.argumentNull('element');
  var imageUrl = element.src || '';

  if (imageUrl.indexOf('data:image/png;base64') == 0 || element['rendered']) {
    return;
  }

  element.setAttribute("image-url", imageUrl); //====================================================
  // 通过 URL 设置图片大小

  if (imageUrl && !options.imageSize) {
    var match = imageUrl.match(/_\d+_\d+/);

    if (match && match.length > 0) {
      var arr = match[0].split('_');

      if (arr.length >= 2) {
        var width = new Number(arr[1]).valueOf();
        var height = new Number(arr[2]).valueOf();
        options.imageSize = {
          width: width,
          height: height
        };
      }
    }
  } //====================================================


  options.imageSize = options.imageSize || {
    width: PREVIEW_IMAGE_DEFAULT_WIDTH,
    height: PREVIEW_IMAGE_DEFAULT_HEIGHT
  }; //====================================================

  if (!options.imageText) {
    options.imageText = element.title || '';
    ;
  }

  var s = options.imageSize; //设置默认的图片

  var src_replace = generateImageBase64(s.width, s.height, draws.text(options.imageText || config.imageDisaplyText)); //getPreviewImage(imageText || config.imageDisaplyText, img_width, img_height);

  element.setAttribute('src', src_replace);
  return new Promise(function (resolve, reject) {
    if (options.loadImage) {
      options.loadImage().then(function (base64) {
        return base64 ? Promise.resolve(base64) : Promise.reject({});
      }).catch(function () {
        var base64 = generateImageBase64(s.width, s.height, draws.text('加载图片失败', {
          fontSize: 24
        }));
        return Promise.resolve(base64);
      }).then(function (base64) {
        element.src = base64;
        element['rendered'] = true;
      });
    } else {
      var image = new Image();

      image.onload = function () {
        element.src = this.src;
        element['rendered'] = true;
        resolve(element.src);
      };

      image.src = imageUrl;
    }
  });
}

exports.renderImage = renderImage;

function imageFileToBase64(imageFile, size) {
  if (!imageFile) throw errors_1.errors.argumentNull('imageFile');
  return new Promise(function (resolve, reject) {
    var reader = new FileReader();
    reader.readAsArrayBuffer(imageFile);

    reader.onload = function (ev) {
      var blob = new Blob([event.target['result']]);
      window['URL'] = window['URL'] || window['webkitURL'];
      var blobURL = window['URL'].createObjectURL(blob);
      var image = new Image();
      image.src = blobURL;

      image.onload = function () {
        var canvas = document.createElement('canvas');
        size = size || {};
        var width = size.width != null && size.width < image.width ? size.width : image.width;
        var height = size.height != null && size.height < image.height ? size.height : image.height;

        if (width != null && height == null) {
          height = width / image.width * image.height;
        } else if (width == null && height != null) {
          width = height / image.height * image.width;
        }

        canvas.width = width;
        canvas.height = height;
        var ctx = canvas.getContext("2d");
        ctx.drawImage(image, 0, 0, width, height);
        var data = canvas.toDataURL("image/jpeg", 0.5);
        resolve({
          base64: data,
          width: width,
          height: height
        });
      };
    };
  });
}

exports.imageFileToBase64 = imageFileToBase64;

function fileToBase64(file) {
  return new Promise(function (resolve, reject) {
    var reader = new FileReader();

    reader.onload = function () {
      resolve(reader.result.toString());
    };

    reader.onerror = function () {
      reject(reader.error);
    };

    reader.readAsDataURL(file);
  });
}

exports.fileToBase64 = fileToBase64;
//# sourceMappingURL=image.js.map
