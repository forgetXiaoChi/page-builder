let arr = location.pathname.split("/").filter(o => o);
arr.pop();
let baseUrl = arr.map(o => "..").join("/") + "/";
let websiteRelatviePath = baseUrl + "website-config.js";
requirejs([websiteRelatviePath], function (mod: any) {
    let w: import("maishu-chitu-scaffold/static/types").WebsiteConfig = mod.default || mod;
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