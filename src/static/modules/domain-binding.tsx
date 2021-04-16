import React = require("react");
import { DataListPage } from "maishu-data-page";
import { StoreDomain } from "../../entities";
import { DataSource } from "maishu-wuzhui";
import { dataSources } from "../services/data-sources";

export default class DomainBinding extends DataListPage<StoreDomain> {
    dataSource: DataSource<StoreDomain> = dataSources.storeDomain;
    itemName: "域名";
    columns = [
        this.boundField({ dataField: "domain", headerText: "域名" }) as any,

    ]

}