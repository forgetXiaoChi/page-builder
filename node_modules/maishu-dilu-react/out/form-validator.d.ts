import { Rule } from "maishu-dilu";
import { FieldValidator, ValidityCondition } from "./value-validator";
export declare class FormValidator {
    private _fieldValidators;
    get fieldValidators(): FieldValidator[];
    field(value: any, rules: Rule[], condition?: ValidityCondition): any;
    field(value: any, rules: Rule[], name?: string): any;
    field(value: any, rules: Rule[], condition: ValidityCondition, name: string): any;
    check(): boolean;
    clearErrors(): void;
}
