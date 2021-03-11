import { ClassAttributes } from "react";
import { FormValidator, Rule } from "maishu-dilu";
import * as React from "react";

export type ValidityCondition = () => boolean;

export interface FieldValidatorProps extends ClassAttributes<FieldValidator> {
    value: any,
    rules: Rule[],
    name?: string,
    condition?: ValidityCondition,
}

export interface FieldValidatorState {
    errorMessage: string
}

export class FieldValidator extends React.Component<FieldValidatorProps, FieldValidatorState> {

    private _validateUndefineValue = false;

    UNSAFE_componentWillReceiveProps(props: FieldValidatorProps) {
        this.validateValue(props);
    }

    check() {
        return this.checkValue(this.props);
    }

    get validateUndefineValue() {
        return this._validateUndefineValue;
    }
    set validateUndefineValue(value: boolean) {
        this._validateUndefineValue = value;
    }

    private checkValue(props: FieldValidatorProps): boolean {
        let { value, rules } = props;
        if (this.props.condition != null && this.props.condition() == false) {
            this.setState({ errorMessage: "" })
            return true;
        }

        let result = true;
        for (let i = 0; i < rules.length; i++) {
            var r = rules[i].validate(value);
            if (r === false) {
                let error = rules[i].error;
                let errorMessage: string;
                if (typeof error == "string") {
                    errorMessage = error;
                }
                else if (typeof error == "function") {
                    errorMessage = error();
                }
                else {
                    errorMessage = "Unknonw Error";
                }
                this.setState({ errorMessage })
            }
            else if (r === true) {
                this.setState({ errorMessage: "" })
            }
            else {
                throw new Error('Please use checkValueAsync method.');
            }

            if (r == false) {
                result = r;
                break;
            }
        }

        return result;
    }

    private validateValue(props: FieldValidatorProps) {
        let { value, rules } = props;

        if (value === undefined && this.validateUndefineValue == false) {
            this.setState({ errorMessage: "" })
            return;
        }

        this.checkValue(props);
    }

    componentDidMount() {
        this.validateValue(this.props);
    }

    render() {
        let { errorMessage } = this.state || {};
        return <span className={FormValidator.errorClassName} style={{ display: errorMessage ? "block" : "none" }}>
            {errorMessage}
        </span>
    }
}