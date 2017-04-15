"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_service_1 = require("../_services/http.service");
var app_settings_1 = require("../app.settings");
require("rxjs/add/operator/catch");
require("rxjs/add/operator/map");
var DashboardService = (function () {
    function DashboardService(http) {
        this.http = http;
        this.projectsUrl = app_settings_1.AppSettings.apiURI + 'api/dashboard';
    }
    DashboardService.prototype.getProjects = function () {
        return this.http.get(this.projectsUrl).map(function (response) {
            console.log(response);
        });
    };
    DashboardService.prototype.ngOnInit = function () {
    };
    return DashboardService;
}());
DashboardService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_service_1.HttpService])
], DashboardService);
exports.DashboardService = DashboardService;
//# sourceMappingURL=dashboard.service.js.map