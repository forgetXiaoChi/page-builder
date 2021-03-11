"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FormValidator = void 0;
const React = require("react");
const value_validator_1 = require("./value-validator");
class FormValidator {
    constructor() {
        this._fieldValidators = [];
    }
    get fieldValidators() {
        return this._fieldValidators;
    }
    field(value, rules, conditionOrName, name) {
        let condition;
        if (typeof conditionOrName == "function") {
            condition = conditionOrName;
        }
        else {
            name = conditionOrName;
        }
        return React.createElement(value_validator_1.FieldValidator, { value: value, rules: rules, name: name, condition: condition, ref: e => {
                if (e == null || this._fieldValidators.indexOf(e) >= 0)
                    return;
                this._fieldValidators.push(e);
            } });
    }
    check() {
        let r = true;
        this._fieldValidators.forEach(c => {
            c.validateUndefineValue = true;
            if (c.check() == false)
                r = false;
        });
        return r;
    }
    clearErrors() {
        this._fieldValidators.forEach(c => {
            c.setState({ errorMessage: "" });
        });
    }
}
exports.FormValidator = FormValidator;
