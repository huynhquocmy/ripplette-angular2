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
var header_service_1 = require("./header.service");
var router_1 = require("@angular/router");
var HeaderComponent = (function () {
    function HeaderComponent(headerService, router, route) {
        this.headerService = headerService;
        this.router = router;
        this.route = route;
        this.hasHeader = true;
        this.path = ['/dashboard'];
    }
    HeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        var _me = this;
        this.headerService.getLoggedUser().subscribe(function (user) {
            if (_me.path.indexOf(_me.router.url) === -1) {
                _me.hasHeader = false;
            }
            else {
                _me.hasHeader = true;
            }
            _this.user = user;
        });
    };
    HeaderComponent.prototype.logout = function () {
        localStorage.removeItem('currentUser');
        this.router.navigate(['login']);
    };
    return HeaderComponent;
}());
HeaderComponent = __decorate([
    core_1.Component({
        templateUrl: 'app/common/header/header.component.html',
        selector: 'layout-header',
        styleUrls: ['dist/common/header/header.component.css']
    }),
    __metadata("design:paramtypes", [header_service_1.HeaderService,
        router_1.Router,
        router_1.ActivatedRoute])
], HeaderComponent);
exports.HeaderComponent = HeaderComponent;
;
//# sourceMappingURL=header.component.js.map