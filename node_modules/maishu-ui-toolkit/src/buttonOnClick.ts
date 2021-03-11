import { toast, confirm } from "./dialog";

export type Callback = (event: MouseEvent) => Promise<any>;
export type ClickArguments = {
    confirm?: string | (() => string),
    toast?: string | (() => string) | HTMLElement
};

export function buttonOnClick(callback: Callback, args?: ClickArguments): (event: Event) => void;
export function buttonOnClick(element: HTMLButtonElement, callback: Callback, args?: ClickArguments);
export function buttonOnClick(arg1: any, arg2: any, arg3?: ClickArguments): (event: Event) => void {
    let element: HTMLButtonElement;
    let callback: Callback;
    let args: ClickArguments;
    if (typeof (arg1) == 'function') {
        callback = arg1;
        args = arg2;
    }
    else if (typeof (arg2) == 'function') {
        element = arg1;
        callback = arg2;
        args = arg3;
    }
    else {
        throw new Error("Arguments error");
    }

    args = args || {};
    let execute = async (event) => {
        let button = (event.currentTarget as HTMLButtonElement);
        button.setAttribute('disabled', '');
        try {
            await callback(event);
            if (args.toast) {
                toast(args.toast);
            }
        }
        catch (exc) {
            console.error(exc);
            throw exc;
        }
        finally {
            button.removeAttribute('disabled')
        }
    }

    let result = function (event: Event) {

        event.stopPropagation();
        event.cancelBubble = true;

        if (!args.confirm) {
            execute(event);
            return;
        }

        let text = typeof args.confirm == 'string' ?
            args.confirm :
            args.confirm();
        confirm({ message: text, confirm: (event) => execute(event) });
    }
    if (element)
        element.onclick = result;

    return result;
}

