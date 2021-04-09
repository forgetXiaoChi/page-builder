import { Entity, Column, PrimaryColumn } from "maishu-node-data";

@Entity("page_data_record")
export class PageRecord {
    @Column({ primary: true, name: "id", type: "char", length: 36 })
    id: string;

    @Column({ name: "name", type: "varchar", length: 56 })
    name: string;

    @Column({ name: "page_data", type: "json", })
    pageData: any;

    @Column({ name: "create_date_time", type: "datetime" })
    createDateTime: Date;

    @Column({ name: "application_id", type: "char", length: 36, nullable: true })
    applicationId?: string;

    @Column({ name: "type", type: "varchar", length: 20 })
    type: "system" | "snapshoot" | "page" | "template";

    @Column({ name: "edit_page", type: "varchar", length: 45, nullable: true })
    editPage?: string;

    @Column({ name: "template_id", type: "varchar", length: 36, nullable: true })
    templateId?: string;

    @Column({ name: "theme_name", type: "varchar", length: 40 })
    themeName: string;
}

@Entity("data_object")
export class DataObject {
    @Column({ primary: true, name: "id", type: "varchar", length: 100 })
    id: string;

    @Column({ name: "data", type: "json" })
    data: any;

    @Column({ name: "create_date_time", type: "datetime" })
    createDateTime: Date;

    @Column({ name: "application_id", type: "char", length: 36, nullable: true })
    applicationId?: string;
}

@Entity("store_info")
export class StoreInfo {
    /** 使用 Application Id 作为主键 */
    @PrimaryColumn({ type: "char", length: 36 })
    id: string;

    @Column({ type: "varchar", length: 50 })
    theme: string;
}