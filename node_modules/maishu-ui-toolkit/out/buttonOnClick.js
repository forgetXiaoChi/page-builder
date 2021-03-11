"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.buttonOnClick = void 0;
const dialog_1 = require("./dialog");
function buttonOnClick(arg1, arg2, arg3) {
    let element;
    let callback;
    let args;
    if (typeof (arg1) == 'function') {
        callback = arg1;
        args = arg2;
    }
    else if (typeof (arg2) == 'function') {
        element = arg1;
        callback = arg2;
        args = arg3;
    }
    else {
        throw new Error("Arguments error");
    }
    args = args || {};
    let execute = (event) => __awaiter(this, void 0, void 0, function* () {
        let button = event.currentTarget;
        button.setAttribute('disabled', '');
        try {
            yield callback(event);
            if (args.toast) {
                dialog_1.toast(args.toast);
            }
        }
        catch (exc) {
            console.error(exc);
            throw exc;
        }
        finally {
            button.removeAttribute('disabled');
        }
    });
    let result = function (event) {
        event.stopPropagation();
        event.cancelBubble = true;
        if (!args.confirm) {
            execute(event);
            return;
        }
        let text = typeof args.confirm == 'string' ?
            args.confirm :
            args.confirm();
        dialog_1.confirm({ message: text, confirm: (event) => execute(event) });
    };
    if (element)
        element.onclick = result;
    return result;
}
exports.buttonOnClick = buttonOnClick;
