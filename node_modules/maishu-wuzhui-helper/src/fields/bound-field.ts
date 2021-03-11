import * as w from 'maishu-wuzhui';
import { errors } from '../errors';
import { Rule } from "maishu-dilu";


export type BoundFieldParams<T> = w.BoundFieldParams<T> & {
    createControl?: w.BoundField<T>["createControl"],
    renderCell?: (cell: w.GridViewCell, dataItem: T, mode?: "read" | "edit") => void
}

export function boundField<T>(params: BoundFieldParams<T>): w.BoundField<T> {
    if (!params) throw errors.argumentNull('params')
    params.headerStyle = Object.assign({ textAlign: 'center' } as CSSStyleDeclaration, params.headerStyle || {});
    if (params.nullText == null)
        params.nullText = '';

    let field = new w.BoundField<T>(params);
    // let validateRules = {
    //     validateRules: params.validateRules
    // }
    // let r = Object.assign(field, validateRules);

    let createControl = field.createControl;
    field.createControl = function () {
        if (params.createControl) {
            let ctrl = params.createControl.apply(this, []);
            return ctrl;
        }

        let ctrl = createControl.apply(this, []);
        // if (params.emptyText)
        //     (<HTMLInputElement>ctrl.element).placeholder = params.emptyText;

        (<HTMLInputElement>ctrl.element).className = "form-control";
        // (<HTMLInputElement>ctrl.element).name = params.dataField;
        return ctrl;
    }

    let createItemCell = field.createItemCell;
    field.createItemCell = function (dataItem: T, cellElement) {
        let cell = createItemCell.apply(this, [dataItem, cellElement]) as w.GridViewEditableCell<T>;
        let render = cell.render;
        cell.render = (dataItem, mode?) => {
            if (params.renderCell) {
                params.renderCell(cell, dataItem, mode)
            }
            else {
                render.apply(cell, [dataItem, mode]);
            }
        }
        return cell;
    }


    return field;
}