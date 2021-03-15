import { pathConcat } from "maishu-toolkit";
import { ComponentInfo } from "../model";
import websiteConfig from "../website-config";

/** 模板消息 */
export class ThemeInfo {
    private themeName: string;

    constructor(themeName: string) {
        this.themeName = themeName;
    }

    url(path: string): string {
        let sitePath: string | null = null;
        let pageUrl = location.hash.substr(1);
        if (pageUrl.startsWith("/")) {
            pageUrl = pageUrl.substr(1);
            sitePath = pageUrl.split("/")[0];
        }

        if (sitePath) {
            path = pathConcat(sitePath, path);
        }

        return path;
    }


    private _componentStationConfig: ComponentStationConfig;
    async componentStationConfig(): Promise<ComponentStationConfig> {
        let componentStationPath = websiteConfig.componentStations[this.themeName];// websiteConfig.componentStationPath;
        if (this._componentStationConfig != null)
            return this._componentStationConfig;



        let url = this.url(`${componentStationPath}/website-config.js`);
        this._componentStationConfig = await this.loadJS(url);

        let _componentInfos = this._componentStationConfig.components;
        if (_componentInfos["pathContacted"] != undefined) {
            _componentInfos["pathContacted"] = true;
            _componentInfos.forEach(o => {
                if (o.path != null)
                    o.path = pathConcat(componentStationPath, o.path);

                if (o.editor != null)
                    o.editor = pathConcat(componentStationPath, o.editor);

                if (o.design != null)
                    o.design = pathConcat(componentStationPath, o.design);

                if (o.layout != null)
                    o.layout = pathConcat(componentStationPath, o.layout);

            })
        }


        return this._componentStationConfig;
    }

    async loadJS<T>(jsPath: string): Promise<T> {
        return new Promise((resolve, reject) => {
            requirejs([jsPath], (mod: any) => {
                resolve(mod.default || mod)
            }, (err: any) => {
                reject(err)
            })
        })
    }
}

export interface ComponentStationConfig {
    components: ComponentInfo[],
    groups: { name: string, id: string }[],
    themes: { name: string, path: string, title: string, image: string, }[],
}