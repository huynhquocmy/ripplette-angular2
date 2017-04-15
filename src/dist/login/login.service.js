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
var http_1 = require("@angular/http");
var Observable_1 = require("rxjs/Observable");
var app_settings_1 = require("../app.settings");
var http_service_1 = require("../_services/http.service");
require("rxjs/add/operator/catch");
require("rxjs/add/operator/map");
var LoginService = (function () {
    function LoginService(http) {
        this.http = http;
        this.loginUrl = app_settings_1.AppSettings.apiURI + 'api/login';
    }
    LoginService.prototype.login = function (email, password) {
        return this.http.post(this.loginUrl, JSON.stringify({ email: email, password: password }))
            .map(function (response) {
            var user = response.json();
            if (user && user.data && user.data.token) {
                localStorage.setItem('currentUser', JSON.stringify(user));
            }
        });
        // .catch(this.handleError);
    };
    LoginService.prototype.logout = function () {
        localStorage.removeItem('currentUser');
    };
    LoginService.prototype.handleError = function (error) {
        // In a real world app, you might use a remote logging infrastructure
        var errMsg;
        if (error instanceof http_1.Response) {
            var body = error.json() || '';
            var err = body.error || JSON.stringify(body);
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Observable_1.Observable.throw(errMsg);
    };
    return LoginService;
}());
LoginService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_service_1.HttpService])
], LoginService);
exports.LoginService = LoginService;
//# sourceMappingURL=login.service.js.map