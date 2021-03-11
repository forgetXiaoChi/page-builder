import * as w from 'maishu-wuzhui';
// import { ElementProvider } from 'maishu-wuzhui';
import { errors } from './errors';
import { classNames, footerHeight } from './style';

type GridViewArguments<T> = w.GridViewArguments<T> & { headerFixed?: boolean };

export function createGridView<T>(params: GridViewArguments<T>) {
    params = Object.assign({
        pageSize: 10,
        dataSource: null,
        columns: null,
    }, params);

    if (params.pageSize === null)
        params.showPagingBar = false;

    if (params.pagerSettings == null) {
        params.pagerSettings = Object.assign(w.DataSourcePagingBar.defaultPagerSettings, {
            activeButtonClassName: 'active',
            buttonContainerWraper: 'ul',
            buttonWrapper: 'li',
            buttonContainerClassName: 'pagination',
            showTotal: true,
        });
    }

    console.assert(params.element != null, 'element can not null.');

    if (params.element == null)
        throw errors.argumentFieldNull("param", "element");

    if (params.element.tagName != "TABLE" && params.element.tagName != "DIV")
        throw errors.gridViewElementError();

    let gridView: w.GridView<T>;
    if (params.element.tagName == "TABLE") {
        params.element.className = 'table table-striped table-bordered table-hover';
        gridView = new w.GridView(params);
    }
    else {
        gridView = new WraperGridView(params);
    };
    return gridView;
}

class WraperGridView<T> extends w.GridView<T> {

    private static DefaultColumnWidth = "120px";
    constructor(params: GridViewArguments<T>) {
        super(WraperGridView.init(params))
        this.createHeader(params);
        this.createFooter(params);
    }

    private static init<T>(params: GridViewArguments<T>) {
        params.element.innerHTML = `
            <div class="main">
                <table class="header table table-bordered">
                    <thead></thead>
                </table>
                <table class="body table table-striped table-bordered table-hover"></table>
            </div>
            <div class="footer"/>`;

        let headerElement = params.element.querySelector(".header") as HTMLElement;
        let bodyElement = params.element.querySelector(".body") as HTMLElement;
        let mainElement = params.element.querySelector(".main") as HTMLElement;

        this.onScroll(mainElement, headerElement);

        params.columns.forEach(c => {
            c.headerStyle = c.headerStyle || {};
            c.itemStyle = c.itemStyle || {};
            c.itemStyle.width = c.headerStyle.width = c.headerStyle.width || WraperGridView.DefaultColumnWidth;
        })

        let tableWidth = this.calcColumnsWidth(params.columns);
        headerElement.style.width = `${tableWidth}px`;
        bodyElement.style.width = `${tableWidth}px`;

        params.element.className = classNames.gridViewWraper;
        let obj = Object.assign({}, params, {
            showFooter: false,
            showPagingBar: false,
            element: bodyElement,
            dataSource: params.dataSource,
            columns: params.columns,
            showHeader: false,
        } as GridViewArguments<T>);
        return obj;
    }

    private static onScroll(mainElement: HTMLElement, headerElement: HTMLElement) {
        mainElement.onscroll = function (e) {
            headerElement.style.top = `${mainElement.scrollTop}px`;
        }
    }

    private static calcColumnsWidth(columns: GridViewArguments<any>["columns"]) {
        let width = 0;
        columns.forEach(c => {
            console.assert(c.headerStyle.width != null);
            width = width + Number.parseInt(c.headerStyle.width?.replace("px", "") as string);
        })

        return width;
    }

    createHeader(params: GridViewArguments<T>) {
        let headerElement = params.element.querySelector(".header thead") as HTMLElement;
        console.assert(headerElement != null);
        let rowElement = document.createElement("tr");
        headerElement.appendChild(rowElement);
        for (let i = 0; i < params.columns.length; i++) {
            let cellElement = document.createElement("th");
            rowElement.appendChild(cellElement);
            params.columns[i].createHeaderCell(cellElement);
        }
    }

    createFooter(params: GridViewArguments<T>) {
        let footerElement = params.element.querySelector(".footer") as HTMLElement;
        let pagingBarElement = document.createElement("div");
        pagingBarElement.className = `${w.GridView.pagingBarClassName} clearfix`;
        new w.DataSourcePagingBar({
            dataSource: params.dataSource,
            element: pagingBarElement
        });
        footerElement.appendChild(pagingBarElement);
        params.element.appendChild(footerElement);
    }


}