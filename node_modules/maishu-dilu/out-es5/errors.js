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
