import { DataSourcePagingBar, DataSource } from "maishu-wuzhui";
import { errors } from "./errors";

export function createPagingBar<T>(params: {
    dataSource: DataSource<T>, element: HTMLElement
}) {

    if (!params.dataSource) throw errors.argumentFieldNull("params", "dataSource");
    if (!params.element) throw errors.argumentFieldNull("params", "element");

    return new DataSourcePagingBar({
        dataSource: params.dataSource,
        element: params.element,
        pagerSettings: {
            activeButtonClassName: 'active',
            buttonWrapper: 'li',
            buttonContainerWraper: 'ul',
            showTotal: false,
        },
    })
}