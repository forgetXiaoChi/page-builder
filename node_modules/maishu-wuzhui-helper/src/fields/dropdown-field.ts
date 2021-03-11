import * as w from 'maishu-wuzhui';

const emptyValue = "";
interface DropdownFieldParams<T, S> extends w.BoundFieldParams<T> {
    dataSource: w.DataSource<S>;
    emptyText?: string;
    nameField: keyof S;
    valueField: keyof S
}

export function dropdownField<T, S>(params: DropdownFieldParams<T, S>) {
    let field = new w.DropdownField(params);
    return field;
}
