export declare let libVirtualPath: string;
declare let websiteConfig: {
    componentStationConfig: string;
    componentStationPath: string;
    requirejs: {
        paths: {
            css: string;
            json: string;
            react: string;
            "react-dom": string;
            "maishu-chitu": string;
            "maishu-chitu-react": string;
            "maishu-chitu-service": string;
            "maishu-dilu-react": string;
            "maishu-image-components": string;
            "maishu-jueying": string;
            "maishu-jueying-core": string;
            "maishu-toolkit": string;
            "maishu-ui-toolkit": string;
            "maishu-wuzhui-helper": string;
            "maishu-dilu": string;
            devices: string;
            jquery: string;
            "jquery-ui": string;
            "js-md5": string;
        };
    };
    containers: {};
    menuItems: ({
        id: string;
        name: string;
        path: string;
        children: {
            id: string;
            name: string;
            path: string;
            hidden: boolean;
        }[];
    } | {
        id: string;
        name: string;
        path: string;
        children?: undefined;
    })[];
};
export default websiteConfig;
