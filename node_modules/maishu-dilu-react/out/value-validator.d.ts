import { ClassAttributes } from "react";
import { Rule } from "maishu-dilu";
import * as React from "react";
export declare type ValidityCondition = () => boolean;
export interface FieldValidatorProps extends ClassAttributes<FieldValidator> {
    value: any;
    rules: Rule[];
    name?: string;
    condition?: ValidityCondition;
}
export interface FieldValidatorState {
    errorMessage: string;
}
export declare class FieldValidator extends React.Component<FieldValidatorProps, FieldValidatorState> {
    private _validateUndefineValue;
    UNSAFE_componentWillReceiveProps(props: FieldValidatorProps): void;
    check(): boolean;
    get validateUndefineValue(): boolean;
    set validateUndefineValue(value: boolean);
    private checkValue;
    private validateValue;
    componentDidMount(): void;
    render(): JSX.Element;
}
