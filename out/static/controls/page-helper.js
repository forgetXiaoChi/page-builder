"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PageHelper = void 0;
const maishu_jueying_core_1 = require("maishu-jueying-core");
const maishu_toolkit_1 = require("maishu-toolkit");
const errors_1 = require("../errors");
class PageHelper {
    static emptyPageData() {
        let pageId = maishu_toolkit_1.guid();
        let pageData = {
            id: pageId,
            type: maishu_jueying_core_1.Page.typeName,
            children: [{
                    id: maishu_jueying_core_1.PageBody.id,
                    type: maishu_jueying_core_1.PageBody.typeName,
                    props: maishu_jueying_core_1.PageBody.defaultProps,
                    selected: false,
                    parentId: pageId,
                }],
            props: {}
        };
        return pageData;
    }
    static findBody(pageData, createIfNotExists = false) {
        let c = pageData.children.filter(o => typeof o != "string" && o.type == maishu_jueying_core_1.PageBody.typeName)[0];
        if (c == null && createIfNotExists) {
            let d = maishu_jueying_core_1.PageHeader.defaultProps;
            c = {
                id: d.id, type: maishu_jueying_core_1.PageBody.typeName,
                props: d, parentId: pageData.id,
            };
            pageData.children.push(c);
        }
        return c;
    }
    static findHeader(pageData, createIfNotExists = false) {
        if (pageData == null)
            throw errors_1.errors.argumentNull("pageData");
        let c = pageData.children.filter(o => typeof o != "string" && o.type == maishu_jueying_core_1.PageHeader.typeName)[0];
        if (c == null && createIfNotExists) {
            let d = maishu_jueying_core_1.PageHeader.defaultProps;
            c = {
                id: d.id, type: maishu_jueying_core_1.PageHeader.typeName,
                props: d, parentId: pageData.id,
            };
            pageData.children.push(c);
        }
        return c;
    }
    static findFooter(pageData, createIfNotExists = false) {
        let c = pageData.children.filter(o => typeof o != "string" && o.type == maishu_jueying_core_1.PageFooter.typeName)[0];
        if (c == null && createIfNotExists) {
            let d = maishu_jueying_core_1.PageFooter.defaultProps;
            c = {
                id: d.id, type: maishu_jueying_core_1.PageFooter.typeName, props: d,
                parentId: pageData.id
            };
            pageData.children.push(c);
        }
        return c;
    }
    /**
     * 合并模板数据到页面数据
     * @param pageData 页面数据
     * @param template 模板数据
     */
    static mergeTemplate(pageData, template) {
        if (!pageData)
            throw errors_1.errors.argumentNull("pageData");
        if (!template)
            throw errors_1.errors.argumentNull("template");
        let pageHeaderData = PageHelper.findHeader(pageData, true);
        let pageFooterData = PageHelper.findFooter(pageData, true);
        let pageBodyData = PageHelper.findBody(pageData, true);
        let templateHeaderData = PageHelper.findHeader(template);
        let templateHeaderChildren = templateHeaderData ? template.children.filter(o => o.parentId == templateHeaderData.id) : [];
        templateHeaderChildren.forEach(c => c.parentId = pageHeaderData.id);
        let templateFooterData = PageHelper.findFooter(template);
        let templateFooterChildren = templateFooterData ? template.children.filter(o => o.parentId == templateFooterData.id) : [];
        templateFooterChildren.forEach(c => c.parentId = pageFooterData.id);
        let templateBodyData = PageHelper.findBody(template);
        let templateBodyChildren = templateBodyData ? template.children.filter(o => o.parentId == templateBodyData.id) : [];
        templateBodyChildren.forEach(c => c.parentId = pageBodyData.id);
        let pageDataControlIds = pageData.children.map(o => o.id);
        [...templateHeaderChildren, ...templateBodyChildren, ...templateFooterChildren].forEach((c, i) => {
            // 如果控件已经存在，不需要添加，直接返回
            if (pageDataControlIds.indexOf(c.id) >= 0) {
                return;
            }
            pageData.children.push(c);
            c.selected = false;
        });
        pageHeaderData.props.enable = false;
        pageFooterData.props.enable = false;
        return pageData;
    }
    /**
     * 移除页面数据中的模板数据
     * @param pageData 页面数据
     * @param template 模板数据
     */
    static trimTemplate(pageData, template) {
        if (!pageData)
            throw errors_1.errors.argumentNull("pageData");
        if (!template)
            throw errors_1.errors.argumentNull("template");
        let templateControlIds = template.children
            .filter(o => o.id != maishu_jueying_core_1.PageHeader.id && o.id != maishu_jueying_core_1.PageBody.id && o.id != maishu_jueying_core_1.PageFooter.id)
            .map(o => o.id);
        pageData.children = pageData.children.filter(o => templateControlIds.indexOf(o.id) < 0);
    }
}
exports.PageHelper = PageHelper;
