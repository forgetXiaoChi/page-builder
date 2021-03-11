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
exports.Less = void 0;
const less = require("less");
const errors_1 = require("./errors");
class Less {
    static pathname(url) {
        let el = document.createElement('a');
        el.href = url;
        return el.pathname;
    }
    static load(url, options) {
        return __awaiter(this, void 0, void 0, function* () {
            options = options || {};
            let { wrapperClassName, name } = options;
            if (!options.baseUrl) {
                let { protocol, host } = location;
                let pathname = Less.pathname(url);
                console.assert(pathname[0] == "/");
                options.baseUrl = `${protocol}//${host}${pathname}`;
            }
            let res = yield fetch(url);
            let text = yield res.text();
            if (wrapperClassName) {
                text = `.${wrapperClassName} {${text}}`;
            }
            Less.renderByText(text, options);
        });
    }
    static renderByRequireJS(moduleName, options) {
        return __awaiter(this, void 0, void 0, function* () {
            options = options || {};
            let req;
            if (options.contextName) {
                req = requirejs({ context: options.contextName });
            }
            else {
                req = requirejs;
            }
            req([`text!${moduleName}`], function (str) {
                console.assert(str);
                Less.renderByText(str, options);
            });
        });
    }
    static renderByText(lessText, options) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!lessText)
                throw errors_1.errors.argumentNull("lessText");
            if (typeof lessText != "string")
                throw errors_1.errors.argumentTypeIncorrect("lessText", "string");
            options = options || {};
            if (options.baseUrl) {
                let extractUrlParts = less.FileManager.prototype.extractUrlParts;
                less.FileManager.prototype.extractUrlParts = function (url) {
                    return extractUrlParts.apply(less, [url, options.baseUrl]);
                };
            }
            less.render(lessText, function (e, result) {
                if (e) {
                    console.error(e);
                    return;
                }
                let styleElement = null;
                let name = options.name;
                if (name) {
                    console.assert(document.head != null);
                    let head = document.head;
                    styleElement = head.querySelector(`style[data-name="${name}"]`);
                }
                if (styleElement == null) {
                    styleElement = document.createElement('style');
                    document.head.appendChild(styleElement);
                    if (name)
                        styleElement.setAttribute("data-name", name);
                }
                styleElement.innerText = result.css;
            });
        });
    }
    static parse(lessText) {
        return new Promise((resolve, reject) => {
            less.render(lessText, function (e, result) {
                if (e) {
                    reject(e);
                    return;
                }
                resolve(result.css);
            });
        });
    }
}
exports.Less = Less;
