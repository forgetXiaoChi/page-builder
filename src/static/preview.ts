let node_modules = `/node_modules`;
var developmentRequirejsConfig = {
    "paths": {
        "css": `${node_modules}/maishu-requirejs-plugins/src/css`,
        "text": `${node_modules}/maishu-requirejs-plugins/lib/text`,
        "json": `${node_modules}/maishu-requirejs-plugins/src/json`,

        "react": `${node_modules}/react/umd/react.production.min`,
        "react-dom": `${node_modules}/react-dom/umd/react-dom.production.min`,
        "maishu-chitu": `${node_modules}/maishu-chitu/dist/index`,
        "maishu-chitu-react": `${node_modules}/maishu-chitu-react/dist/index.min`,
        "maishu-chitu-service": `${node_modules}/maishu-chitu-service/dist/index.min`,
        "maishu-dilu": `${node_modules}/maishu-dilu/dist/index.min`,
        "maishu-dilu-react": `${node_modules}/maishu-dilu-react/dist/index`,
        "maishu-router": `${node_modules}/maishu-router/dist/index`,
        "maishu-toolkit": `${node_modules}/maishu-toolkit/dist/index.min`,
        "maishu-ui-toolkit": `${node_modules}/maishu-ui-toolkit/dist/index.min`,
        "maishu-wuzhui": `${node_modules}/maishu-wuzhui/dist/index.min`,
        "maishu-wuzhui-helper": `${node_modules}/maishu-wuzhui-helper/dist/index.min`,
    }
}

var productionRequirejsConfig = {
    "paths": {
        "css": `${node_modules}/maishu-requirejs-plugins/src/css`,
        "text": `${node_modules}/maishu-requirejs-plugins/lib/text`,
        "json": `${node_modules}/maishu-requirejs-plugins/src/json`,

        "react": `${node_modules}/react/umd/react.production.min`,
        "react-dom": `${node_modules}/react-dom/umd/react-dom.production.min`,
        "maishu-chitu": `${node_modules}/maishu-chitu/dist/index`,
        "maishu-chitu-react": `${node_modules}/maishu-chitu-react/dist/index.min`,
        "maishu-chitu-service": `${node_modules}/maishu-chitu-service/dist/index.min`,
        "maishu-dilu": `${node_modules}/maishu-dilu/dist/index.min`,
        "maishu-dilu-react": `${node_modules}/maishu-dilu-react/dist/index.min`,
        "maishu-router": `${node_modules}/maishu-router/dist/index`,
        "maishu-toolkit": `${node_modules}/maishu-toolkit/dist/index.min`,
        "maishu-ui-toolkit": `${node_modules}/maishu-ui-toolkit/dist/index.min`,
        "maishu-wuzhui": `${node_modules}/maishu-wuzhui/dist/index.min`,
        "maishu-wuzhui-helper": `${node_modules}/maishu-wuzhui-helper/dist/index.min`,
    }
}

let arr = location.pathname.split("/").filter(o => o);
arr.pop();
let baseUrl = arr.map(o => "..").join("/") + "/";
let websiteRelatviePath = baseUrl + `website-config.js`;
requirejs([websiteRelatviePath], function (mod: any) {

    let w: import("maishu-chitu-scaffold/static/types").WebsiteConfig = mod.default || mod;
    w.mode = w.mode || "development";
    var requirejsConfig = w.mode == "development" ? developmentRequirejsConfig : productionRequirejsConfig;
    w.requirejs = w.requirejs || {};
    w.requirejs.paths = Object.assign(w.requirejs.paths || {}, requirejsConfig.paths);

    console.assert(w.requirejs != null);
    w.requirejs.baseUrl = baseUrl;
    let req = requirejs.config(w.requirejs);
    let init = () => {
        req(["preview/application"], function (mod: any) {
            let app = mod.run({}, req);
            app.run();
        })

    }
    if (w.mode == "production") {
        req(["pre-required"], function (prerequired) {
            let keys = Object.getOwnPropertyNames(prerequired);
            for (let i = 0; i < keys.length; i++) {
                define(keys[i], function () {
                    return prerequired[keys[i]];
                })
            }
            init();
        });
    }
    else {
        init();
    }
})