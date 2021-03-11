# DILU

表单验证框架

## 使用

* 传统 JS 项目使用，引用 dilu.js
```html
<script src="js/dilu.js"></script>
```
* 使用 AMD 加载
```js
requirejs.config({
    shim: {
        dilu: {
            exports: 'dilu'
        }
    },
    paths: {
        dilu: 'js/dilu'
    }
}
requirejs(['dilu'],function(dilu){

})
```

## 示例

HTML

```html
<html>

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link href="https://cdn.bootcss.com/bootstrap/3.3.7/css/bootstrap.css" rel="stylesheet">
</head>

<body>
    <div class="container form-horizontal col-xs-12 col-sm-6" style="padding-top:10px;">
        <div class="form-group">
            <label class="col-xs-12 col-sm-3">手机号码</label>
            <div class="col-xs-12 col-sm-9">
                <input name="mobile" name="手机号码" class="form-control" />
            </div>
        </div>
        <div class="form-group">
            <label class="col-xs-12 col-sm-3">验证码</label>
            <div class="col-xs-12 col-sm-9">
                <div class="input-group">
                    <input name="verifyCode" class="form-control" />
                    <span class="input-group-btn">
                        <button id="btn-verifyCode" class="btn btn-default" type="button">发送验证码</button>
                    </span>
                </div>
                <div id="verifyCodeError" class="validateMessage"></div>
            </div>
        </div>
        <div class="form-group">
            <label class="col-xs-12 col-sm-3">密码</label>
            <div class="col-xs-12 col-sm-9">
                <input name="password" type="password" class="form-control" />
            </div>
        </div>
        <div class="form-group">
            <label class="col-xs-12 col-sm-3">确认密码</label>
            <div class="col-xs-12 col-sm-9">
                <input name="confirmPassword" type="password" class="form-control" />
            </div>
        </div>
        <div class="form-group">
            <div class="col-xs-12"></div>
            <div class="col-xs-12" style="text-align:right;">
                <button id="btn-register" class="btn btn-primary btn-block">注册</button>
            </div>
        </div>
    </div>

</body>
<script src="js/dilu.js"></script>
<script src="index.js"></script>

</html>
```

JS

```js
var FormValidator = dilu.FormValidator, r = dilu.rules;
var passwordInput = document.getElementsByName('password')[0];
var form = document.getElementsByClassName('container')[0];
var validator = new dilu.FormValidator(form,
    { name: "mobile", rules: [r.required(), mobile()] },
    {
        name: 'verifyCode',
        errorElement: document.getElementById('verifyCodeError'),
        rules: [required()], depends: [function () { return validator.checkElement('mobile'); }]
    },
    { name: 'password', rules: [required('请输入密码')] },
    {
        name: 'confirmPassword',
        rules: [
            required('请再次输入密码'),
            equal(function () { return passwordInput.value; }, '两次输入的密码不一致')
        ]
    });
document.getElementById('btn-register').onclick = function () {
    validator.check();
};
document.getElementById('btn-verifyCode').onclick = function () {
    validator.checkElement('mobile');
};
```

## 验证方法

验证所有表单字段

```ts
check(): Promise<boolean>
```

验证单个表单字段

```ts
checkElement(inputElement: HTMLInputElement): Promise<boolean>
```

## 验证规则

名称 | 说明
----------------------- | -----------------------
**required**|验证必填字段
**email** |验证邮箱
**equal** |验证字段与某个值相等
**greaterThan** |验证字段大于某个值
**lessThan** |验证字段小于某个值
**custom** |自定义验证规则

**示例**

```html
```

## API 
### Formvalidator 对象

表单验证器，用于对表单中的字段进行验证

#### check 方法

对验证表单中的元素进行同步验证。

**定义**

```ts
check(): boolean;
```

**示例**

```ts
let validator = new dilu.FormValidator(dialog_element,
    { name: 'fileName', rules: [dilu.rules.required('请输入文件名')] }
);
let isValid = validator.check();
```

#### checkAsync 方法

对验证表单中的元素进行异步验证。

**定义**

```ts
check(): Promise<boolean>;
```

**示例**

```ts
let validator = new dilu.FormValidator(dialog_element,
    { name: 'fileName', rules: [dilu.rules.required('请输入文件名')] }
);
validator.checkAsync().then(function(isValid){

});
```

#### clearErrors 方法

清除表单的错误信息

**定义**

```ts
clearErrors(): void;
```
**示例**

```ts
let validator = new dilu.FormValidator(dialog_element,
    { name: 'fileName', rules: [dilu.rules.required('请输入文件名')] }
);
validator.clearErrors();
```

#### clearElementError 方法

**定义**

```ts
clearElementError(name: string): void
```

#### checkElementAsync
异步验证 HTML 元素

**定义**

```ts
checkElementAsync(name: string): Promise<boolean>
```

#### checkElement
同步验证 HTML 元素

**定义**

```ts
checkElement(name: string): boolean;
```

### rules 对象

表单验证规则

#### required 方法

验证必填字段

**定义**

```ts
required(error?: string): Rule
```

#### matches 方法

验证两个字段值是否相等

```ts
matches(otherElement: InputElement, error?: string) => Rule
```

#### email 方法

验证邮箱

```ts
email(error?: string): Rule
```

#### minLength 方法

验证字段最小长度

**定义**

```ts
minLength(length: number, error?: string): Rule
```

#### maxLength 方法

验证字段的最大长度

**定义**

```ts
maxLength(length: number, error?: string): Rule
```




