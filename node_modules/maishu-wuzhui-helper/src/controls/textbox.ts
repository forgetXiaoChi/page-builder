import * as w from 'maishu-wuzhui';
import { errors } from '../errors';

export type TextBoxParams<T> = {
    element: HTMLInputElement, dataField: keyof T, dataItem: T,
    valueType: 'string' | 'int' | 'float'
}

export class TextBox<T> {
    constructor(params: TextBoxParams<T>) {
        if (params == null) throw errors.argumentNull("params")
        if (!params.element) throw errors.argumentFieldNull("params", "element")
        if (!params.dataField) throw errors.argumentFieldNull("params", "dataField")
        if (!params.dataItem) throw errors.argumentFieldNull("params", "dataItem")
        if (!params.valueType) throw errors.argumentFieldNull("params", "valuetype")

        let { element, dataField, dataItem, valueType } = params
        let value = dataItem[dataField]
        element.value = `${value || ""}`
        element.onchange = () => {
            if (valueType == 'int') {
                dataItem[dataField] = Number.parseInt(element.value) as any
            }
            else if (valueType == 'float') {
                dataItem[dataField] = Number.parseFloat(element.value) as any
            }
            else {
                dataItem[dataField] = element.value as any
            }
        }
    }
} 

export function textbox<T>(args: w.TextBoxParams<T>) {
    return new TextBox(args)
}
