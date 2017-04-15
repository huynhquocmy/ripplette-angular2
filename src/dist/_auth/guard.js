"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
;
var AuthService = (function () {
    function AuthService(router) {
        this.router = router;
    }
    AuthService.prototype.canActivate = function (route, state) {
        if (localStorage.getItem('currentUser')) {
            return true;
        }
        else {
            this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
            return false;
        }
    };
    return AuthService;
}());
exports.AuthService = AuthService;
//# sourceMappingURL=guard.js.map