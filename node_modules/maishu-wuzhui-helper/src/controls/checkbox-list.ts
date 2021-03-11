import { DataSource } from 'maishu-wuzhui'
import { errors } from '../errors';
export async function checkboxList<T>(params: {
    element: HTMLElement, dataSource: DataSource<T>, nameField?: keyof T, valueField?: keyof T,
    dataItem: T, dataField: Extract<keyof T, string>
}) {
    if (!params) throw errors.argumentNull('params')
    if (!params.element) throw errors.argumentFieldNull('params', 'element')
    if (!params.dataSource) throw errors.argumentFieldNull('params', 'dataSource')

    let { dataSource, element, nameField, valueField, dataField, dataItem } = params;
    let r = await dataSource.select({});

    let elementDataItems: { element: HTMLInputElement, dataItem: T }[] = [];

    r.dataItems.map(o => {
        let label = document.createElement('label');
        let input = document.createElement('input');
        input.type = "checkbox";

        let span = document.createElement('span');
        label.appendChild(input);
        label.appendChild(span);

        let name = nameField ? o[nameField] : o;
        let value = valueField ? o[valueField] : o;
        input.value = `${value}`;
        span.innerHTML = `${name}`;

        if (dataItem[dataField] && !Array.isArray(dataItem[dataField])) {
            throw errors.dataFieldValueNotArray(dataField);
        }

        if (value == dataItem[dataField]) {
            input.checked = true;
        }

        elementDataItems.push({ element: input, dataItem: o });

        input.onchange = function (e) {
            dataItem[dataField] = elementDataItems.filter(o => o.element.checked).map(o => (o.dataItem as any)[valueField]) as any;
        }

        element.appendChild(label);
    })
}


