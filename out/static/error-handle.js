"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandle = void 0;
const ui = require("maishu-ui-toolkit");
let errorMessages = {
    "726": "没有权限访问"
};
function errorHandle(error, app) {
    error.message = errorMessages[error.name] || error.message;
    if (error.name == "718" && app != null) {
        // app.redirect("login");
        location.hash = "#login";
        return;
    }
    ui.alert({
        title: "错误",
        message: error.message
    });
}
exports.errorHandle = errorHandle;
