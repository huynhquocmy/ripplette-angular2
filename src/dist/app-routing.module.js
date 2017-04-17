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
var login_component_1 = require("./login/login.component");
var dashboard_component_1 = require("./dashboard/dashboard.component");
var site_component_1 = require("./site/site.component");
var page_component_1 = require("./site/page/page.component");
var auth_service_1 = require("./_auth/auth.service");
var appRoutes = [
    { path: 'login', component: login_component_1.LoginComponent },
    { path: 'dashboard', component: dashboard_component_1.DashboardComponent, canActivate: [auth_service_1.AuthService] },
    {
        path: 'site/:projectid',
        component: site_component_1.SiteComponent,
        canActivate: [auth_service_1.AuthService],
        children: [
            { path: 'page/:pageid', component: page_component_1.PageComponent }
        ]
    },
    { path: 'site/:projectid/page/:pageid', component: site_component_1.SiteComponent, canActivate: [auth_service_1.AuthService] },
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: '**', redirectTo: '/login' }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    core_1.NgModule({
        imports: [
            router_1.RouterModule.forRoot(appRoutes)
        ],
        exports: [
            router_1.RouterModule
        ],
        providers: [auth_service_1.AuthService]
    })
], AppRoutingModule);
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=app-routing.module.js.map