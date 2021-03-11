import * as w from 'maishu-wuzhui';
import { errors } from '../errors';

export function commandField<T>(params: w.CommandFieldParams) {
    if (!params) throw errors.argumentNull('params')

    return new w.CommandField<T>(params);
}
