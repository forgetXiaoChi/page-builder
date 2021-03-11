import { BoundField, GridViewDataCell, BoundFieldParams } from "maishu-wuzhui";

export function dateTimeField<T>(args: BoundFieldParams<T>): BoundField<T> {

    let field = new DateTimeField<T>(args);
    return field;
}

class DateTimeField<T> extends BoundField<T> {
    private emptyText: string | undefined;
    constructor(args: BoundFieldParams<T>) {
        super(Object.assign({
            headerStyle: { textAlign: 'center', width: `160px` },
            itemStyle: { textAlign: 'center', width: `160px` }
        }, args))

        this.emptyText = args.emptyText;
    }
    createControl() {
        let ctrl = super.createControl();
        let VALUE: keyof typeof ctrl = "value";
        Object.defineProperty(ctrl, VALUE, {
            get() {
                let str = (ctrl.element as HTMLInputElement).value;
                let value: Date | null = null;
                try {
                    value = new Date(Date.parse(str));
                }
                catch (err) {

                }
                return value;
            },
            set(value: Date) {
                let str = toDateTimeString(value);
                (ctrl.element as HTMLInputElement).value = str || "";
            }
        });

        if (this.emptyText)
            (<HTMLInputElement>ctrl.element).placeholder = this.emptyText;

        (<HTMLInputElement>ctrl.element).className = "form-control";
        (<HTMLInputElement>ctrl.element).name = this.params.dataField;
        return ctrl;
    }
    createItemCell(dataItem: T, cellElement?: HTMLElement) {
        let cell = super.createItemCell(dataItem, cellElement) as GridViewDataCell<T>;
        cell.formatValue = function (value: any) {
            return toDateTimeString(value) || "";
        }
        return cell;
    }
}


export function toDateTimeString(datetime: number | Date | string) {
    if (datetime == null)
        return null;

    if (typeof datetime == "string") {
        datetime = new Date(datetime);
    }


    let d: Date;
    if (typeof datetime == 'number')
        d = new Date(datetime);
    else
        d = datetime;

    let month = `${d.getMonth() + 1}`
    month = month.length == 1 ? '0' + month : month;

    let date = `${d.getDate()}`;
    date = date.length == 1 ? '0' + date : date;

    let hours = `${d.getHours()}`;
    hours = hours.length == 1 ? '0' + hours : hours;

    let minutes = `${d.getMinutes()}`;
    minutes = minutes.length == 1 ? '0' + minutes : minutes;

    return `${d.getFullYear()}-${month}-${date} ${hours}:${minutes}`
}