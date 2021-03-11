import { DataSource } from 'maishu-wuzhui';
export declare function checkboxList<T>(params: {
    element: HTMLElement;
    dataSource: DataSource<T>;
    nameField?: keyof T;
    valueField?: keyof T;
    dataItem: T;
    dataField: Extract<keyof T, string>;
}): Promise<void>;
