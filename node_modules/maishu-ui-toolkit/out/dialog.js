"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.showPanel = exports.toast = exports.showToastMessage = exports.confirm = exports.alert = exports.hideDialog = exports.showDialog = exports.dialogConfig = void 0;
const errors_1 = require("./errors");
function dialogContainer() {
    return exports.dialogConfig.dialogContainer || document.body;
}
exports.dialogConfig = {
    dialogContainer: null
};
function addClassName(element, className) {
    console.assert(className != null, 'class is null');
    let c1 = (element.className || '').split(/\s+/);
    let c2 = className.split(/\s+/);
    var itemsToAdd = c2.filter(o => c1.indexOf(o) < 0);
    c1.push(...itemsToAdd);
    element.className = c1.join(' ');
}
function removeClassName(element, className) {
    console.assert(className != null, 'class is null');
    let c1 = (element.className || '').split(/\s+/);
    let c2 = className.split(/\s+/);
    var itemsRemain = c1.filter(o => c2.indexOf(o) < 0);
    element.className = itemsRemain.join(' ');
}
let dialogElements = new Array();
let dialogCallbacks = new Array();
/** 弹窗
 * @param element bootstrap 的 modal 元素
 */
function showDialog(element, callback) {
    removeClassName(element, 'out');
    element.style.display = 'block';
    setTimeout(() => {
        addClassName(element, 'modal fade in');
    }, 100);
    let dialogIndex = dialogElements.indexOf(element);
    if (dialogIndex < 0) {
        dialogElements.push(element);
        dialogIndex = dialogElements.length - 1;
        let closeButtons = element.querySelectorAll('[data-dismiss="modal"]') || [];
        for (let i = 0; i < closeButtons.length; i++) {
            closeButtons[i].onclick = () => hideDialog(element);
        }
        let allButtons = element.querySelectorAll('button');
        for (let i = 0; i < allButtons.length; i++) {
            allButtons.item(i).addEventListener('click', function (event) {
                let callback = dialogCallbacks[dialogIndex];
                if (callback) {
                    callback(event.currentTarget);
                }
            });
        }
    }
    dialogCallbacks[dialogIndex] = callback;
    element.tabIndex = 1;
    var firstField = element.querySelector('input:not([type]),input:not([readonly])[type="text"],input:not([readonly])[type="password"]');
    if (firstField) {
        firstField.focus();
    }
    else {
        element.focus();
    }
    element.addEventListener('keydown', on_keydown);
}
exports.showDialog = showDialog;
function hideDialog(element) {
    removeClassName(element, 'in');
    addClassName(element, 'modal fade out');
    element.removeEventListener('keydown', on_keydown);
    return new Promise((reslove, reject) => {
        setTimeout(() => {
            element.style.removeProperty('display');
            reslove({});
        }, 1000);
    });
}
exports.hideDialog = hideDialog;
function on_keydown(event) {
    const KEY_CODE_ESC = 27;
    if (event.keyCode == KEY_CODE_ESC) {
        let dialogElement = findDialogElement(event.target);
        console.assert(dialogElement != null);
        if (dialogElement.getAttribute('data-keyboard') == 'false')
            return;
        hideDialog(dialogElement);
    }
}
function findDialogElement(e) {
    while (e) {
        let names = e.className.split(' ').filter(o => o);
        if (names.indexOf('modal') >= 0)
            return e;
        e = e.parentElement;
    }
}
function alert(args) {
    const elementId = "AA0321E3-B2E4-4971-99D8-BF2FF66748F2";
    let element = document.getElementById(elementId);
    if (element == null) {
        element = document.createElement('div');
        element.id = elementId;
        dialogContainer().appendChild(element);
        element.innerHTML = `
            <div class="modal-dialog">
                
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="btn close" data-dismiss="modal">
                            <span aria-hidden="true">&times;</span><span class="sr-only">Close</span>
                        </button>
                        <h4 class="modal-title"></h4>
                    </div>
                    <div class="modal-body">
                        <h5></h5>
                    </div>
                    <div class="modal-footer">
                        <button name="ok" type="button" class="btn btn-primary">
                        </button>
                    </div>
                </div>
            </div>
        `;
    }
    if (typeof args == 'string') {
        args = { title: '&nbsp;', message: args };
    }
    showDialog(element);
    let titleElement = element.querySelector('.modal-title');
    titleElement.innerHTML = args.title;
    let bodyElement = element.querySelector('.modal-body');
    bodyElement.innerHTML = args.message;
    let modalFooter = element.querySelector('.modal-footer');
    let okButton = modalFooter.querySelector('[name="ok"]');
    okButton.innerHTML = args.confirmText || "确定";
    okButton.onclick = () => hideDialog(element);
}
exports.alert = alert;
function confirm(args) {
    let title;
    let message;
    let execute = args.confirm;
    let cancel = args.cancle || (() => Promise.resolve());
    let container = args.container || document.body;
    let confirmText = args.confirmText || '确定';
    let cancelText = args.cancelText || '取消';
    if (typeof args == 'string') {
        message = args;
    }
    else {
        title = args.title;
        message = args.message;
    }
    const elementId = "C3139D58-75F7-47B2-AEC4-76C3658848A0";
    let confirmDialogElment = document.getElementById(elementId);
    if (confirmDialogElment == null) {
        confirmDialogElment = document.createElement('div');
        confirmDialogElment.id = elementId;
        confirmDialogElment.className = 'modal fade';
        confirmDialogElment.style.marginTop = '20px';
        console.assert(dialogContainer != null, 'dialog container is null');
        confirmDialogElment.innerHTML = `
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="btn close" data-dismiss="modal">
                        <span aria-hidden="true">&times;</span><span class="sr-only">Close</span>
                    </button>
                    <h4 class="modal-title">确认</h4>
                </div>
                <div class="modal-body form-horizontal">
                   
                </div>
                <div class="modal-footer">
                    <button name="cancel" type="button" class="btn btn-default">
           
                    </button>
                    <button name="ok" type="button" class="btn btn-primary">
        
                    </button>
                </div>
            </div>
        </div>
    `;
        dialogContainer().appendChild(confirmDialogElment);
    }
    let cancelElement = confirmDialogElment.querySelector('[name="cancel"]');
    cancelElement.innerHTML = cancelText;
    let okElement = confirmDialogElment.querySelector('[name="ok"]');
    okElement.innerHTML = confirmText;
    let modalHeader = confirmDialogElment.querySelector('.modal-header');
    let modalBody = confirmDialogElment.querySelector('.modal-body');
    let modalFooter = confirmDialogElment.querySelector('.modal-footer');
    modalBody.innerHTML = `<h5>${message}</h5>`;
    if (title) {
        modalHeader.querySelector('h4').innerHTML = title;
    }
    let cancelButton = modalFooter.querySelector('[name="cancel"]');
    let okButton = modalFooter.querySelector('[name="ok"]');
    let closeButton = modalHeader.querySelector('.close');
    closeButton.onclick = cancelButton.onclick = function () {
        cancel()
            .then(() => hideDialog(confirmDialogElment))
            .then(() => {
            confirmDialogElment.remove();
        });
    };
    okButton.onclick = function (event) {
        execute(event)
            .then(() => hideDialog(confirmDialogElment))
            .then(() => {
            confirmDialogElment.remove();
        })
            .catch(() => hideDialog(confirmDialogElment));
    };
    showDialog(confirmDialogElment);
}
exports.confirm = confirm;
exports.showToastMessage = toast;
function toast(obj) {
    if (obj == null)
        throw errors_1.errors.argumentNull('obj');
    let msg;
    let title;
    if (typeof obj == 'object') {
        if (obj.tagName == null) {
            let options = obj;
            msg = options.message;
            title = options.title;
        }
        else {
            msg = obj;
        }
    }
    else {
        msg = obj;
    }
    let dialogContainer = exports.dialogConfig.dialogContainer || document.body;
    let toastDialogElement = document.createElement('div');
    toastDialogElement.className = 'modal fade in';
    toastDialogElement.style.marginTop = '20px';
    console.assert(dialogContainer != null, 'dialog container is null.');
    dialogContainer.appendChild(toastDialogElement);
    let header = title ? `<div class="modal-header">
                                    <h4 class="modal-title">${title}</h4>
                               </div>` : '';
    toastDialogElement.innerHTML = `
                        <div class="modal-dialog">
                            <div class="modal-content">
                                ${header}
                                <div class="modal-body form-horizontal">
                                </div>
                            </div>
                        </div>
                    `;
    let modalBody = toastDialogElement.querySelector('.modal-body');
    console.assert(modalBody != null);
    if (typeof msg == 'string') {
        modalBody.innerHTML = `<h5>${msg}</h5>`;
    }
    else if (typeof msg == 'function') {
        modalBody.innerHTML = `<h5>${msg()}</h5>`;
    }
    else
        modalBody.appendChild(msg);
    // let dialog = new Dialog(toastDialogElement);
    // dialog.show();
    showDialog(toastDialogElement);
    setTimeout(() => {
        hideDialog(toastDialogElement).then(() => {
            toastDialogElement.remove();
        });
    }, 500);
}
exports.toast = toast;
exports.showPanel = (function () {
    let panel = document.createElement('div');
    panel.className = 'mobile-page panel';
    panel.style.display = 'none';
    document.body.appendChild(panel);
    panel.innerHTML = `
            <div class="modal">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
    
                        </div>
                        <div class="modal-body">
    
                        </div>
                        <div class="modal-footer">
    
                        </div>
                    </div>
                </div>
            </div>
            <div class="modal-backdrop in">
            </div>
        `;
    let modal = panel.querySelector('.modal');
    let backdrop = panel.querySelector('.modal-backdrop');
    let header = panel.querySelector('.modal-header');
    let footer = panel.querySelector('.modal-footer');
    let body = panel.querySelector(".modal-body");
    let modalDialog = panel.querySelector(".modal-dialog");
    let isIOS = navigator.userAgent.indexOf('iPhone') > 0 || navigator.userAgent.indexOf('iPad') > 0;
    //=====================================================================
    // 点击非窗口区域，关窗口。并禁用上级元素的 touch 操作。
    // let panel = this.panel; //this.refs['panel'] as HTMLElement;
    // let modalDialog = this.modalDialog; //this.refs['modalDialog'] as HTMLElement;
    panel.addEventListener('touchstart', (event) => {
        let dialogRect = modalDialog.getBoundingClientRect();
        for (let i = 0; i < event.touches.length; i++) {
            let { clientX } = event.touches[i];
            if (clientX < dialogRect.left) {
                hide();
                return;
            }
        }
    });
    if (isIOS) {
        panel.addEventListener('touchstart', (event) => {
            let tagName = event.target.tagName;
            if (tagName == 'BUTTON' || tagName == 'INPUT' || tagName == 'A') {
                return;
            }
            event.stopPropagation();
            event.preventDefault();
        });
    }
    function hide() {
        modal.style.removeProperty('transform');
        backdrop.style.opacity = '0';
        window.setTimeout(() => {
            panel.style.display = 'none';
        }, 500);
    }
    return function showPanel(args) {
        args = args || {};
        panel.style.display = 'block';
        modal.style.display = 'block';
        setTimeout(() => {
            modal.style.transform = 'translateX(0)';
            backdrop.style.opacity = '0.5';
        }, 50);
        let setBodyHeight = () => {
            let headerHeight = header.getBoundingClientRect().height;
            let footerHeight = footer.getBoundingClientRect().height;
            let bodyHeight = window.innerHeight - headerHeight - footerHeight;
            body.style.height = `${bodyHeight}px`;
        };
        window.addEventListener('resize', () => setBodyHeight());
        setBodyHeight();
        if (args.header)
            args.header(header);
        if (args.body)
            args.body(body);
        if (args.footer)
            args.footer(footer);
        return {
            hide: () => hide()
        };
    };
})();
