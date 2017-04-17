"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var page_module_1 = require("./page/page.module");
var site_component_1 = require("./site.component");
var menu_module_1 = require("./menu/menu.module");
var site_service_1 = require("./site.service");
var SiteModule = (function () {
    function SiteModule() {
    }
    return SiteModule;
}());
SiteModule = __decorate([
    core_1.NgModule({
        imports: [
            router_1.RouterModule,
            menu_module_1.MenuModule,
            page_module_1.PageModule
        ],
        declarations: [
            site_component_1.SiteComponent
        ],
        providers: [site_service_1.SiteService]
    })
], SiteModule);
exports.SiteModule = SiteModule;
//# sourceMappingURL=site.module.js.map