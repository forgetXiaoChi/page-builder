import { Page, PageBody, PageFooter, PageHeader } from "./components";

let elementId = "maishu-jueying-core-style";
if (!document.getElementById(elementId) && document.head != null) {
    let element = document.createElement('style');
    element.type = 'text/css';
    element.id = elementId;
    document.head.appendChild(element);
    element.innerHTML = `
    .${Page.className} {
        width   : 100%;
        height  : 100%;
        position: absolute;
    }
    
    .${Page.className} .${PageBody.className} {
        overflow-y: auto;
        overflow-x: hidden;
        height  : 100%;
    }
    
    .${Page.className} .${PageBody.className}::-webkit-scrollbar-track-piece {
        background-color: #fff;
    }
    
    .${Page.className} .${PageBody.className}::-webkit-scrollbar {
        width: 4px;
    }
    
    .${Page.className} .${PageBody.className}::-webkit-scrollbar-thumb {
        background: #999;
    }
    
    .${Page.className} .${PageHeader.className} {
        position: absolute;
        top     : 0px;
        width   : 100%;
    }
    
    .${Page.className} .${PageFooter.className} {
        position: absolute;
        bottom  : 0px;
        width   : 100%;
        margin  : 0;
    }
    `
}

export function isVisible(style: React.CSSProperties) {
    if (!style.display)
        return true;

    return style.display != "none";
}

export function isFixed(style: React.CSSProperties) {
    return style.position == "fixed" || style.position == "absolute";
}
