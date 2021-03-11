"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FieldValidator = void 0;
const maishu_dilu_1 = require("maishu-dilu");
const React = require("react");
class FieldValidator extends React.Component {
    constructor() {
        super(...arguments);
        this._validateUndefineValue = false;
    }
    UNSAFE_componentWillReceiveProps(props) {
        this.validateValue(props);
    }
    check() {
        return this.checkValue(this.props);
    }
    get validateUndefineValue() {
        return this._validateUndefineValue;
    }
    set validateUndefineValue(value) {
        this._validateUndefineValue = value;
    }
    checkValue(props) {
        let { value, rules } = props;
        if (this.props.condition != null && this.props.condition() == false) {
            this.setState({ errorMessage: "" });
            return true;
        }
        let result = true;
        for (let i = 0; i < rules.length; i++) {
            var r = rules[i].validate(value);
            if (r === false) {
                let error = rules[i].error;
                let errorMessage;
                if (typeof error == "string") {
                    errorMessage = error;
                }
                else if (typeof error == "function") {
                    errorMessage = error();
                }
                else {
                    errorMessage = "Unknonw Error";
                }
                this.setState({ errorMessage });
            }
            else if (r === true) {
                this.setState({ errorMessage: "" });
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
    validateValue(props) {
        let { value, rules } = props;
        if (value === undefined && this.validateUndefineValue == false) {
            this.setState({ errorMessage: "" });
            return;
        }
        this.checkValue(props);
    }
    componentDidMount() {
        this.validateValue(this.props);
    }
    render() {
        let { errorMessage } = this.state || {};
        return React.createElement("span", { className: maishu_dilu_1.FormValidator.errorClassName, style: { display: errorMessage ? "block" : "none" } }, errorMessage);
    }
}
exports.FieldValidator = FieldValidator;
