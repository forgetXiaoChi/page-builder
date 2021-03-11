import { Rule } from "maishu-dilu";
import * as React from "react";
import { FieldValidator, ValidityCondition } from "./value-validator";

export class FormValidator {
    private _fieldValidators: FieldValidator[] = [];

    get fieldValidators() {
        return this._fieldValidators;
    }

    field(value: any, rules: Rule[], condition?: ValidityCondition)
    field(value: any, rules: Rule[], name?: string)
    field(value: any, rules: Rule[], condition: ValidityCondition, name: string);
    field(value: any, rules: Rule[], conditionOrName?: ValidityCondition | string, name?: string) {
        let condition: ValidityCondition;
        if (typeof conditionOrName == "function") {
            condition = conditionOrName;
        }
        else {
            name = conditionOrName;
        }

        return <FieldValidator value={value} rules={rules} name={name} condition={condition}
            ref={e => {
                if (e == null || this._fieldValidators.indexOf(e) >= 0)
                    return;

                this._fieldValidators.push(e);
            }} />
    }

    check() {
        let r: boolean = true;
        this._fieldValidators.forEach(c => {
            c.validateUndefineValue = true;
            if (c.check() == false)
                r = false;
        })

        return r;
    }

    clearErrors() {
        this._fieldValidators.forEach(c => {
            c.setState({ errorMessage: "" });
        })
    }
}