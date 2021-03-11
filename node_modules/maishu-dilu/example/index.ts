import * as dilu from "../out/index"

let FormValidator = dilu.FormValidator;
let r = dilu.rules;
let passwordInput = document.getElementsByName('password')[0] as HTMLInputElement;
let form = document.getElementsByClassName('container')[0] as HTMLElement;
let validator: dilu.FormValidator = new dilu.FormValidator(form,
    { name: "mobile", rules: [r.required(), r.mobile()] },
    {
        name: 'verifyCode',
        errorElement: document.getElementById('verifyCodeError'),
        rules: [r.required()], depends: [() => validator.checkElement('mobile')]
    },
    { name: 'password', rules: [r.required('请输入密码')] },
    {
        name: 'confirmPassword',
        rules: [
            r.required('请再次输入密码'),
            r.equal(() => passwordInput.value, '两次输入的密码不一致')
        ]
    }
)

document.getElementById('btn-register').onclick = function () {
    validator.check();
};

document.getElementById('btn-verifyCode').onclick = function () {
    validator.checkElement('mobile');
}


