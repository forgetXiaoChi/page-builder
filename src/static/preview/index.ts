(function () {


    let node_modules = "../node_modules";
    let lib = "lib";
    let req = requirejs.config({
        shim: {
            fetch: {
                exports: 'fetch'
            },
            controls: {
                deps: ['react-dom', 'react']
            },
            mobileControls: {
                exports: 'controls',
                deps: ['hammer', 'bezier-easing', 'react']
            },
            userServices: {
                exports: 'userServices'
            },
        },
        paths: {
            "css": `${node_modules}/maishu-requirejs-plugins/src/css`,
            "json": `${node_modules}/maishu-requirejs-plugins/src/json`,

            "react": `${node_modules}/react/umd/react.development`,
            "react-dom": `${node_modules}/react-dom/umd/react-dom.development`,

            "maishu-chitu": `${node_modules}/maishu-chitu/dist/index`,
            "maishu-chitu-react": `${node_modules}/maishu-chitu-react/dist/index`,
            "maishu-chitu-service": `${node_modules}/maishu-chitu-service/dist/index`,
            "maishu-dilu-react": `${node_modules}/maishu-dilu-react/dist/index`,

            "maishu-image-components": `${node_modules}/maishu-image-components/dist/index`,
            "maishu-jueying": `${node_modules}/maishu-jueying/dist/index`,
            "maishu-jueying-core": `${node_modules}/maishu-jueying-core/dist/index`,
            "maishu-toolkit": `${node_modules}/maishu-toolkit/dist/index`,
            "maishu-ui-toolkit": `${node_modules}/maishu-ui-toolkit/dist/index`,
            "maishu-wuzhui-helper": `${node_modules}/maishu-wuzhui-helper/dist/index`,
            "maishu-dilu": `${node_modules}/maishu-dilu/dist/index`,

            "devices": `content/devices.css-1.2/assets/devices.min.css`,
            "jquery": `${node_modules}/jquery/dist/jquery`,
            "jquery-ui": `content/jquery-ui-1.12.1/jquery-ui`,
            "js-md5": `${node_modules}/js-md5/build/md5.min`,

            "url-pattern": `${node_modules}/url-pattern/lib/url-pattern`,
        }
    });

    requirejs(["application"], function (mod: any) {
        let app = mod.run({}, req);
        app.run();
    })

})();