import { ComponentData, PageHeaderProps, PageFooterProps, PageData, PageBodyProps } from "maishu-jueying-core";
export declare class PageHelper {
    static emptyPageData(): PageData;
    static findBody(pageData: PageData, createIfNotExists?: boolean): BodyComponentData;
    static findHeader(pageData: PageData, createIfNotExists?: boolean): HeaderComponentData | null;
    static findFooter(pageData: PageData, createIfNotExists?: boolean): FooterComponentData | null;
    /**
     * 合并模板数据到页面数据
     * @param pageData 页面数据
     * @param template 模板数据
     */
    static mergeTemplate(pageData: PageData, template: PageData): PageData;
    /**
     * 移除页面数据中的模板数据
     * @param pageData 页面数据
     * @param template 模板数据
     */
    static trimTemplate(pageData: PageData, template: PageData): void;
}
declare type Omit<T, K> = Pick<T, Exclude<keyof T, K>>;
declare type BodyComponentData = Omit<ComponentData, "props"> & {
    props: PageBodyProps;
};
declare type HeaderComponentData = Omit<ComponentData, "props"> & {
    props: PageHeaderProps;
};
declare type FooterComponentData = Omit<ComponentData, "props"> & {
    props: PageFooterProps;
};
export {};
