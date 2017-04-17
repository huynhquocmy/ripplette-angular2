"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var platform_browser_1 = require("@angular/platform-browser");
var http_1 = require("@angular/http");
var forms_1 = require("@angular/forms");
var app_component_1 = require("./app.component");
var app_routing_module_1 = require("./app-routing.module");
var login_module_1 = require("./login/login.module");
var dashboard_module_1 = require("./dashboard/dashboard.module");
var default_request_options_service_1 = require("./default-request-options.service");
var http_service_1 = require("./_services/http.service");
var alert_module_1 = require("./common/alert/alert.module");
var site_module_1 = require("./site/site.module");
var header_module_1 = require("./common/header/header.module");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            http_1.HttpModule,
            http_1.JsonpModule,
            common_1.CommonModule,
            platform_browser_1.BrowserModule,
            header_module_1.HeaderModule,
            alert_module_1.AlertModule,
            forms_1.FormsModule,
            login_module_1.LoginModule,
            dashboard_module_1.DashboardModule,
            site_module_1.SiteModule,
            app_routing_module_1.AppRoutingModule
        ],
        declarations: [
            app_component_1.AppComponent
        ],
        providers: [default_request_options_service_1.requestOptionsProvider, http_service_1.HttpService],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map