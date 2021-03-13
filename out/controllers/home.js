"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
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
exports.HomeController = void 0;
const maishu_node_mvc_1 = require("maishu-node-mvc");
const maishu_nws_mvc_1 = require("maishu-nws-mvc");
const decoders_1 = require("../decoders");
const errors_1 = require("../static/errors");
const entities_1 = require("../entities");
let HomeController = class HomeController {
    menuItems(cd) {
        return cd.menuItem;
    }
    selectTheme(appId, conn, d) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!appId)
                throw errors_1.errors.argumentNull("appId");
            if (!d.themeName)
                throw errors_1.errors.routeDataFieldNull("themeName");
            let storeInfos = conn.getRepository(entities_1.StoreInfo);
            let storeInfo = yield storeInfos.findOne(appId);
            if (storeInfo == null) {
                storeInfo = { id: appId, theme: d.themeName };
                yield storeInfos.insert(storeInfo);
            }
            else {
                yield storeInfos.update(appId, { theme: d.themeName });
            }
            return { id: storeInfo.id };
        });
    }
};
__decorate([
    maishu_node_mvc_1.action("/menu-items"),
    __param(0, maishu_node_mvc_1.contextData)
], HomeController.prototype, "menuItems", null);
__decorate([
    maishu_node_mvc_1.action("/set-theme"),
    __param(0, decoders_1.currentAppId), __param(1, decoders_1.connection), __param(2, maishu_node_mvc_1.routeData)
], HomeController.prototype, "selectTheme", null);
HomeController = __decorate([
    maishu_nws_mvc_1.controller("/")
], HomeController);
exports.HomeController = HomeController;
