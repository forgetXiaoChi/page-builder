"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.libVirtualPath = void 0;
exports.libVirtualPath = "lib";
let websiteConfig = {
    //===================================================
    // 组件站点配置
    componentStationConfig: "config.js",
    componentStationPath: "design",
    //===================================================
    requirejs: {
        paths: {
            "css": "node_modules/maishu-requirejs-plugins/src/css",
            "json": "node_modules/maishu-requirejs-plugins/src/json",
            "react": "/node_modules/react/umd/react.development",
            "react-dom": "/node_modules/react-dom/umd/react-dom.development",
            "maishu-chitu": "/node_modules/maishu-chitu/dist/index",
            "maishu-chitu-react": "node_modules/maishu-chitu-react/dist/index",
            "maishu-chitu-service": "/node_modules/maishu-chitu-service/dist/index",
            "maishu-dilu-react": "node_modules/maishu-dilu-react/dist/index",
            "maishu-image-components": "node_modules/maishu-image-components/dist/index",
            "maishu-jueying": "node_modules/maishu-jueying/dist/index",
            "maishu-jueying-core": "node_modules/maishu-jueying-core/dist/index",
            "maishu-toolkit": "/node_modules/maishu-toolkit/dist/index",
            "maishu-ui-toolkit": "node_modules/maishu-ui-toolkit/dist/index",
            "maishu-wuzhui-helper": "/node_modules/maishu-wuzhui-helper/dist/index",
            "maishu-dilu": "/node_modules/maishu-dilu/dist/index",
            "devices": `${exports.libVirtualPath}/devices.css-1.2/assets/devices.min.css`,
            "jquery": "node_modules/jquery/dist/jquery",
            "jquery-ui": `${exports.libVirtualPath}/jquery-ui-1.12.1/jquery-ui`,
            "js-md5": "node_modules/js-md5/build/md5.min",
        }
    },
    containers: {},
    menuItems: [
        {
            id: "AE3789A2-0CF0-4D81-A7C0-E2C9324A1DDD", name: "页面列表", path: "#page-list",
            children: [
                { id: "3CE34AB9-7814-4FE5-85E2-ABA6AAF9C1FD", name: "页面编辑", path: "#page-edit", hidden: true }
            ]
        },
        {
            id: "7B13EC50-A398-4379-AED5-6AB3263EDB75", name: "主题", path: "#theme-list",
        }
    ]
};
exports.default = websiteConfig;
