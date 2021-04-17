import { DataSource } from "maishu-toolkit";
import { PageRecord, StoreDomain, UrlRewrite } from "../../entities";
import { LocalService } from "../services/local-service";

let localService = new LocalService();
let pageDataDataSource = new DataSource<PageRecord>({
    primaryKeys: ["id"],
    select: async (args) => {
        return localService.pageRecordList(args);
    },
    delete: async (item) => {
        return localService.removePageRecord(item.id);
    },
    insert: async (item) => {
        return localService.addPageRecord(item);
    },
    update: async (item) => {
        return localService.updatePageRecord(item);
    }
})

let storeDomainDataSource = new DataSource<StoreDomain>({
    primaryKeys: ["id"],
    select: async (args) => {
        return localService.storeDomainList(args);
    },
    insert: async (item) => {
        return localService.insertStoreDomain(item);
    },
    update: async (item) => {
        return localService.updateStoreDomain(item);
    },
    delete: async (item) => {
        return localService.deleteStoreDomain(item);
    }
})

let urlRewriteDataSource = new DataSource<UrlRewrite>({
    primaryKeys: ["id"],
    select: async (args) => {
        return localService.urlRewriteList(args);
    },
    insert: async (item) => {
        return localService.urlRewriteInsert(item);
    },
    update: async (item) => {
        return localService.urlRewriteUpdate(item);
    },
    delete: async (item) => {
        return localService.urlRewriteDelete(item);
    }
})

export let dataSources = {
    pageRecords: pageDataDataSource,
    storeDomain: storeDomainDataSource,
    urlRewrite: urlRewriteDataSource,
}