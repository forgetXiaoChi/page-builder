import { DataSource } from 'maishu-wuzhui'
import { errors } from '../errors';

export async function radioList<T>(params: {
    element: HTMLElement, dataSource: DataSource<T>,
    nameField?: Extract<keyof T, string>, valueField?: keyof T, defaultValue?: any,
    dataItem: T, dataField: string
}) {
    if (!params) throw errors.argumentNull('params')
    if (!params.element) throw errors.argumentFieldNull('params', 'element')
    if (!params.dataSource) throw errors.argumentFieldNull('params', 'dataSource')

    let { dataSource, element, nameField, valueField, dataField } = params;
    let r = await dataSource.select({});
    element.innerHTML = "";
    r.dataItems.map(o => {
        let label = document.createElement('label');
        label.className = "radio-inline";
        let controlElement = document.createElement('input');
        controlElement.type = "radio";
        controlElement.name = dataField;
        let nameElement = document.createElement('span')

        label.appendChild(controlElement)
        label.appendChild(nameElement)

        let itemName = getDataSourceItemName(o);
        let itemValue = getDataSourceItemValue(o);
        controlElement.value = `${itemValue}`;
        nameElement.innerHTML = `${itemName}`;
        controlElement.onchange = function (e) {
            (params.dataItem as any)[dataField] = itemValue;
        }

        let value = (params.dataItem as any)[dataField] || params.defaultValue;
        if (value == itemValue) {
            controlElement.checked = true;
        }

        element.appendChild(label)
    });

    function getDataSourceItemName(item: T) {
        if (!nameField)
            return item;

        return item[nameField];
    }

    function getDataSourceItemValue(item: T) {
        if (!valueField)
            return item;

        return item[valueField];
    }


}