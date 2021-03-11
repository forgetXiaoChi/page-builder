import { GridView } from "maishu-wuzhui";

export let classNames = {
    inputControl: "input-control",
    gridViewWraper: "grid-view-wraper"
}

export let footerHeight = 52;

let element = document.createElement('style');
element.type = 'text/css';
element.setAttribute("data-name", "wuzhui-helper");

if (document.head != null) {
    document.head.appendChild(element);
}

let labelWidth = 80;
let margin = 20;
element.innerHTML = `
    .${classNames.inputControl} label {
        width: ${labelWidth}px;
        float: left;
    }
    .${classNames.inputControl} .control {
        margin-left: ${margin}px;
        width: calc(100% - ${labelWidth + margin}px);
        float: left;
    }
    .${classNames.inputControl} .validationMessage {
        color: red
    }
    .${GridView.pagingBarClassName} .pagination {
        margin-top: 0;
        margin-bottom: 0;
        float: right;
    } 
    .${GridView.pagingBarClassName} .total {
        float: left;
        padding-top: 8px;
    }
    .${classNames.gridViewWraper} {
        border: 1px solid #ddd;
    }
    .${classNames.gridViewWraper} .main{
        overflow: auto;
    }
    .${classNames.gridViewWraper} .table {
        margin-bottom: 0;
        max-width: unset;
        min-width: 100%;
    }
    .${classNames.gridViewWraper} .header {
        background-color: white;
        position: relative;
    }
    .${classNames.gridViewWraper} .footer  {
        border: 1px solid #ddd;
        border-top: none;
        padding: 8px;
        height: ${footerHeight}px;
    }
    .${classNames.gridViewWraper} .footer .${GridView.pagingBarClassName} .pagination {
        float: right;
        margin: 0;
    }
    .${classNames.gridViewWraper} .footer .${GridView.pagingBarClassName} .total {
        float: left;
    }
`;