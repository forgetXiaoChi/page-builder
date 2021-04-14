// import UrlPattern = require("url-pattern");
// import * as crossroads from "crossroads";




// let route = crossroads.addRoute("/:store:/{applicationId}/{pageId}/:productId:/:fileName*",
//     function (store: string, applicationId: string, pageId: string, productId: string, fileName: string) {
//         console.log(`store:${store}`);
//         console.log(`applicationId:${applicationId}`);
//         console.log(`pageId:${pageId}`);
//         console.log(`productId:${productId}`);
//         //console.log(`filePath:${filePath}`);
//         console.log(`fileName:${fileName}`)
//     });
// route.rules = {
//     store: ["store"],
//     applicationId: new RegExp("[0-9A-Fa-f\-]{36}"),
//     pageId: new RegExp("[0-9A-Fa-f\-]{36}"),
//     productId: new RegExp("[0-9A-Fa-f\-]{36}"),
//     filePath: /\S+/,
//     fileName: /\S+/
// }
// let r = crossroads.parse("/store/7bbfa36c-8115-47ad-8d47-9e52b58e7efd/6a9f7e44-5554-baf3-31f9-9823387342c7/aab/bb/cc/preview.js")

// var route4 = crossroads.addRoute('/foo/{id*}/edit');
// route4.matched.add(function (args) {
//     console.log(args)
// });
// crossroads.parse("/foo/45/asd/123/edit")
