import * as w from 'maishu-wuzhui';

export function dropdown<T>(args: w.DropDownParams<T>) {
    return new w.DropDown(args)
}