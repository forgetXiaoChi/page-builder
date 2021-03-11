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
