import * as w from 'maishu-wuzhui';
import { errors } from '../errors';

export function customField<T>(params: w.CustomFieldParams<T>) {
    if (!params) throw errors.argumentNull('params')

    params.headerStyle = Object.assign({ textAlign: 'center' } as CSSStyleDeclaration, params.headerStyle || {});
    let field = new w.CustomField<T>(params);
    return field
}