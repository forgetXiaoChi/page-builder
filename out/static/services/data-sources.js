"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.dataSources = void 0;
const maishu_toolkit_1 = require("maishu-toolkit");
const local_service_1 = require("../services/local-service");
let localService = new local_service_1.LocalService();
let pageDataDataSource = new maishu_toolkit_1.DataSource({
    primaryKeys: ["id"],
    select: (args) => __awaiter(void 0, void 0, void 0, function* () {
        return localService.pageRecordList(args);
    }),
    delete: (item) => __awaiter(void 0, void 0, void 0, function* () {
        return localService.removePageRecord(item.id);
    }),
    insert: (item) => __awaiter(void 0, void 0, void 0, function* () {
        return localService.addPageRecord(item);
    }),
    update: (item) => __awaiter(void 0, void 0, void 0, function* () {
        return localService.updatePageRecord(item);
    })
});
exports.dataSources = {
    pageRecords: pageDataDataSource
};
