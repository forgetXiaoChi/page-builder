requirejs(["website-config.js"], function (mod) {
    let w: import("maishu-chitu-scaffold/static/types").WebsiteConfig = mod.default || mod;
    console.assert(w.requirejs != null);
    w.requirejs.baseUrl = "./";
    let req = requirejs.config(w.requirejs);
    req(["preview/application"], function (mod: any) {
        let app = mod.run({}, req);
        app.run();
    })
})