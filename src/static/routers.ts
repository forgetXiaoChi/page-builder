import { createRouter } from "maishu-router";

const pageNames = ["account", "checkout", "login", "home", "login", "order-detail", "order-list", "product", "product-list",
    "receipt-edit", "receipt-list", "search", "shipping", "shopping-cart"];

let nameRegex = new RegExp(pageNames.join("|"));
export let routers = [
    createRouter("/:id/?productId/*filePath", {
        id: /^[0-9A-Fa-f\-]{36}$/,
        productId: /^[0-9A-Fa-f\-]{36}$/,
        filePath: /[0-9A-Za-z\-_\/\.]/,
    }),
    createRouter("/:name/:productId/*filePath", {
        name: /product/,
        productId: /^[0-9A-Fa-f\-]{36}$/,
        filePath: /[0-9A-Za-z\-_\/\.]/,
    }),
    createRouter("/:name/:productName/*filePath", {
        name: /product/,
        productName: /\\S+/,
        filePath: /[0-9A-Za-z\-_\/\.]/,
    }),
    createRouter("/:name/:orderId/*filePath", {
        name: /checkout|order-detail|shipping|register/,
        orderId: /^[0-9A-Fa-f\-]{36}$/,
        filePath: /[0-9A-Za-z\-_\/\.]/,
    }),
    createRouter("/:name/:orderId/*filePath", {
        name: /receipt-edit/,
        receiptId: /^[0-9A-Fa-f\-]{36}$/,
        filePath: /[0-9A-Za-z\-_\/\.]/,
    }),
    createRouter("/:name/*filePath", {
        name: nameRegex,
        filePath: /[0-9A-Za-z\-_\/\.]/,
    }),
    createRouter("/:name", {
        name: /^[0-9A-Za-z\-_]*$/,
    }),
];
