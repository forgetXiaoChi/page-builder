import * as w from 'maishu-wuzhui';

export interface CheckboxListFieldParams<T, S> extends w.BoundFieldParams<T> {
    dataSource: w.DataSource<S>;
    nameField: keyof S;
    valueField: keyof S;
}

export function checkboxListField<T, S>(params: CheckboxListFieldParams<T, S>): w.BoundField<T> {
    let field = new CheckboxListField(params);
    return field;
}

class CheckboxListField<T, S> extends w.BoundField<T> {
    private _params: CheckboxListFieldParams<T, S>;
    private checkboxs: { [key: string]: HTMLInputElement } = {};
    private value: string[];
    private dataItems: S[];

    constructor(params: CheckboxListFieldParams<T, S>) {
        super(params);
        this._params = params;
    }

    async getDataItems() {
        if (!this.dataItems) {
            let r = await this._params.dataSource.select();
            this.dataItems = r.dataItems;
        }
        return this.dataItems;
    }

    setControlValue(value?: string[]) {
        value = value || [];
        for (let i = 0; i < value.length; i++) {
            let checkbox = this.checkboxs[value[i]];
            if (checkbox) {
                checkbox.checked = true;
            }
        }
    }

    createControl() {
        let element = document.createElement("div");
        this.getDataItems().then(dataItems => {
            this.dataItems = dataItems;
            for (let i = 0; i < dataItems.length; i++) {
                console.assert(this._params.nameField != null);
                console.assert(this._params.valueField != null);
                let name = dataItems[i][this._params.nameField];
                let value = dataItems[i][this._params.valueField];
                let itemCtrl = document.createElement("div");
                itemCtrl.innerHTML = `<label><input type="checkbox" value="${value}">${name}</label>`;
                itemCtrl.className = "checkbox";
                element.appendChild(itemCtrl);
                let checkbox = itemCtrl.querySelector("input") as HTMLInputElement;
                this.checkboxs[`${value}`] = checkbox;
            }
            if (self.value) {
                this.setControlValue(self.value);
            }
        })

        let self = this;
        return {
            element,
            get value(): string[] {
                let checkboxs: HTMLInputElement[] = [];
                for (let c in self.checkboxs) {
                    if (self.checkboxs[c].checked) {
                        checkboxs.push(self.checkboxs[c]);
                    }
                }
                let value = checkboxs.map(o => o.value);
                return value;
            },
            set value(value: Array<string>) {
                self.value = value;
                self.setControlValue(value);
            }
        }
    }

    createItemCell(dataItem: T) {
        let field = this as CheckboxListField<T, S>;
        let cell = super.createItemCell(dataItem) as w.GridViewEditableCell<T>;
        cell.render = function (dataItem) {
            field.getDataItems().then(dataItems => {
                let value = dataItem[field._params.dataField] as any as string[];
                let names: string[] = [];
                for (let i = 0; i < value.length; i++) {
                    let dataItem = dataItems.filter(o => o[field._params.valueField] as any == value[i])[0];
                    if (dataItem) {
                        names.push(dataItem[field._params.nameField] as any as string);
                    }
                }
                let text = names.filter(o => o).join(",");
                this.element.innerHTML = text;
            })
        }

        return cell;
    }

}