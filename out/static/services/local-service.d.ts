import { Service } from "maishu-chitu-service";
import { DataSourceSelectArguments, DataSourceSelectResult } from "maishu-wuzhui-helper";
import { PageRecord } from "../../entities";
import { ComponentInfo } from "../model";
export declare class LocalService extends Service {
    constructor();
    url(path: string): string;
    pageRecordList(args: DataSourceSelectArguments): Promise<DataSourceSelectResult<PageRecord>>;
    removePageRecord(id: string): Promise<unknown>;
    addPageRecord(item: Partial<PageRecord>): Promise<Partial<PageRecord>>;
    updatePageRecord(item: Partial<PageRecord>): Promise<Partial<PageRecord>>;
    getPageRecord(id: string): Promise<PageRecord>;
    getPageDataByName(name: string): Promise<PageRecord>;
    componentInfos(): Promise<ComponentInfo[]>;
    componentGroups(): Promise<{
        name: string;
        id: string;
    }[]>;
    private _componentStationConfig;
    componentStationConfig(): Promise<ComponentStationConfig>;
    templateList(): Promise<PageRecord[]>;
    loadJS<T>(jsPath: string): Promise<T>;
    setTheme(themeName: string): Promise<unknown>;
}
export interface ComponentStationConfig {
    components: ComponentInfo[];
    groups: {
        name: string;
        id: string;
    }[];
    themes: {
        name: string;
        path: string;
        title: string;
        image: string;
    }[];
}
