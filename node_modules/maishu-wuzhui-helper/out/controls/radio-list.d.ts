import { DataSource } from 'maishu-wuzhui';
export declare function radioList<T>(params: {
    element: HTMLElement;
    dataSource: DataSource<T>;
    nameField?: Extract<keyof T, string>;
    valueField?: keyof T;
    defaultValue?: any;
    dataItem: T;
    dataField: string;
}): Promise<void>;
