export declare class PageRecord {
    id: string;
    name: string;
    pageData: any;
    createDateTime: Date;
    applicationId?: string;
    type: "system" | "snapshoot" | "page" | "template";
    editPage?: string;
    templateId?: string;
}
export declare class DataObject {
    id: string;
    data: any;
    createDateTime: Date;
    applicationId?: string;
}
export declare class StoreInfo {
    /** 使用 Application Id 作为主键 */
    id: string;
    theme: string;
}
