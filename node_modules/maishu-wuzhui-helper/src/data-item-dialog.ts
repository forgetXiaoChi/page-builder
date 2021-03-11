import { DataControlField, BoundField, GridViewCell, GridViewEditableCell } from "maishu-wuzhui";
import { showDialog, hideDialog } from "maishu-ui-toolkit";
import { FormValidator, ValidateField, Rule } from "maishu-dilu";
import { boundField } from "./fields/bound-field";

type Params<T> = {
    /** 窗体元素，使用 boostrap 创建 */
    element: HTMLElement,
    /** 字段 */
    fields: DataControlField<T>[],
    /** 数据项 */
    onConfirm?: (dataItem: T) => void,
    cancelButtonText?: string,
    confirmButtonText?: string,
    title?: string
    onCancel?: () => void,
}

export class DataItemDialog<T> {
    private params: Params<T>;
    private dataCells: GridViewCell[];
    private validator: FormValidator;
    #element: HTMLElement;

    constructor(params: Params<T>) {
        this.params = Object.assign({
            cancelButtonText: "取消",
            confirmButtonText: "确定"
        } as Params<T>, params);

        this.dataCells = [];
        params.fields.forEach(c => {
            let headerStyle = c.headerStyle as CSSStyleDeclaration || {};
            headerStyle.textAlign = "right";
            delete (headerStyle as any).width;

            let itemStyle = c.itemStyle as CSSStyleDeclaration || {};
            delete (itemStyle as any).width;
        })

        type BoundField = ReturnType<typeof boundField>;
        let validateFiels: ValidateField[] = (params.fields as BoundField[]).filter(c => c.validateRules != null && c.dataField != null)
            .map(o => ({ name: o.dataField, rules: o.validateRules as Rule[] }))


        this.validator = new FormValidator(params.element, ...validateFiels);

        this.#element = this.createDialogElement();
    }

    show(dataItem?: T) {
        dataItem = dataItem || {} as T;
        for (let i = 0; i < this.dataCells.length; i++) {
            if (this.dataCells[i].type == "GridViewEditableCell") {
                let cell = this.dataCells[i] as GridViewEditableCell<T>;
                cell.render(dataItem, "edit");
            }
        }
        showDialog(this.params.element);
    }

    hide() {
        hideDialog(this.params.element);
    }

    get title(): string | undefined {
        let titleElement = this.#element.querySelector(".modal-title");
        return titleElement?.innerHTML;
    }
    set title(value: string | undefined) {
        let titleElement = this.#element.querySelector(".modal-title");
        if (titleElement == null)
            return;

        titleElement.innerHTML = value || "";
    }

    get onConfirm() {
        return this.params.onConfirm;
    }

    set onConfirm(value) {
        this.params.onConfirm = value;
    }

    get onCancel() {
        return this.params.onCancel;
    }
    set onCancel(value) {
        this.params.onCancel = value;
    }

    private invokeOnConfirm() {
        let dataItem = {} as any;
        for (let i = 0; i < this.dataCells.length; i++) {
            if (this.dataCells[i].type == "GridViewEditableCell") {
                let cell = this.dataCells[i] as GridViewEditableCell<T>;
                dataItem[cell.dataField] = cell.controlValue;
            }
        }
        if (!this.validator.check())
            return;

        this.hide();
        if (this.params.onConfirm) {
            this.params.onConfirm(dataItem);
        }
    }

    private invokeOnCancel() {
        if (this.params.onCancel) {
            this.params.onCancel();
        }
    }

    private createDialogElement() {
        let dialogElement = document.createElement("div");
        dialogElement.className = "modal-dialog";

        dialogElement.innerHTML = `<div class="modal-dialog">
<div class="modal-content">
    <div class="modal-header">
        <button type="button" class="btn close" data-dismiss="modal">
            <span aria-hidden="true">&times;</span>
            <span class="sr-only">Close</span>
        </button>
        <h4 class="modal-title">${this.params.title || ""}</h4>
    </div>
    <div class="modal-body">
    </div>
    <div class="modal-footer">
        <button type="button" class="btn btn-default" data-dismiss="modal">
            ${this.params.cancelButtonText}
        </button>
        <button type="button" class="btn btn-primary">
            ${this.params.confirmButtonText}
        </button>
    </div>
</div>
</div>`;

        this.params.element.appendChild(dialogElement);
        let confirmButton = dialogElement.querySelector(".btn-primary") as HTMLButtonElement;
        confirmButton.onclick = () => this.invokeOnConfirm();
        let cancelButton = dialogElement.querySelector(".btn-default") as HTMLButtonElement;
        cancelButton.onclick = () => this.invokeOnCancel();

        let bodyElement = dialogElement.querySelector(".modal-body") as HTMLElement;
        this.params.fields.forEach(field => {

            if (!field.visible) {
                return;
            }

            let fieldElement = document.createElement("div");
            fieldElement.className = "form-group clearfix input-control";
            bodyElement.appendChild(fieldElement);

            let labelElement = document.createElement("label");
            labelElement.innerHTML = field.headerText;
            fieldElement.appendChild(labelElement);

            let controlContainerElement = document.createElement("div");
            controlContainerElement.className = "control";
            fieldElement.appendChild(controlContainerElement);

            let boundField = field as BoundField<T>;
            boundField.createHeaderCell(labelElement);
            let dataCell = boundField.createItemCell({} as T, controlContainerElement);
            this.dataCells.push(dataCell);
        })

        return dialogElement;
    }
}

export function createDataItemDialog<T>(params: Params<T>) {
    let dialog = new DataItemDialog(params);
    return dialog;
}