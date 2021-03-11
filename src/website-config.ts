import * as menuItems from "json!menu-items";

console.log(menuItems)
export let libVirtualPath = "lib";
let websiteConfig = {
    //===================================================
    // 组件站点配置
    componentStationConfig: "config.js",
    componentStationPath: "design",
    //===================================================
    requirejs: {
        paths: {

            "css": "node_modules/maishu-requirejs-plugins/src/css",

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

            "devices": `${libVirtualPath}/devices.css-1.2/assets/devices.min.css`,
            "jquery": "node_modules/jquery/dist/jquery",
            "jquery-ui": `${libVirtualPath}/jquery-ui-1.12.1/jquery-ui`,
            "js-md5": "node_modules/js-md5/build/md5.min",
            "taro-builder-core": "/node_modules/taro-builder-core/dist/index",
            "taro-ui": `${libVirtualPath}/taro-ui`,
            "taro-ui/dist": "node_modules/taro-ui/dist",
            "@tarojs/components": `${libVirtualPath}/taro-components`,
            "@tarojs/taro-h5": `${libVirtualPath}/taro-h5`,
            "@tarojs/taro": `${libVirtualPath}/taro-h5`,
            "nervjs": `${libVirtualPath}/nervjs`,
            "tslib": "node_modules/tslib/tslib",
            "htmlparser2": "node_modules/htmlparser2/",
        }
    },
    menuItems,
    containers: {}
};
export default websiteConfig;
