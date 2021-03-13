"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loadingElement = void 0;
const React = require("react");
exports.loadingElement = React.createElement("div", { className: "loading" },
    React.createElement("i", { className: "icon-spinner icon-spin", style: { marginRight: 4 } }),
    React.createElement("span", null, "\u6570\u636E\u6B63\u5728\u52A0\u8F7D\u4E2D..."));
