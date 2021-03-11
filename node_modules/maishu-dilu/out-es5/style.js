"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var formValidator_1 = require("./formValidator");

var elementId = "maishu-dilu-style";

if (!document.getElementById(elementId) && document.head != null) {
  var element = document.createElement('style');
  element.type = 'text/css';
  element.id = elementId;
  document.head.appendChild(element);
  element.innerHTML = "\n    .".concat(formValidator_1.FormValidator.errorClassName, " {\n        color: red;\n        font-weight: bold;\n    }\n    ");
}
//# sourceMappingURL=style.js.map
