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
var router_1 = require("@angular/router");
var employee_service_1 = require("./services/employee.service");
var EmployeeDetailComponent = (function () {
    function EmployeeDetailComponent(router, activatedRoute, employeeService) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.employeeService = employeeService;
    }
    EmployeeDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Lấy id từ url param
        this.subscription = this.activatedRoute.params.subscribe(function (params) {
            _this._id = params['id'];
        });
        // Get object employee dựa trên id
        this.employeeService.GetSingle(this._id).subscribe(function (data) {
            _this.employee = data;
            console.log(data);
        });
    };
    EmployeeDetailComponent.prototype.GotoEmployee = function () {
        this.router.navigate(['employees']);
    };
    EmployeeDetailComponent.prototype.ngOnDestroy = function () {
        // Angular mới nhất đã tự động unsubscribe nên ko cần gọi unsubscribe nữa
    };
    EmployeeDetailComponent = __decorate([
        core_1.Component({
            selector: 'employee-detail-component',
            templateUrl: '/app/employee-detail.component.html',
            providers: [employee_service_1.EmployeeService]
        }),
        __metadata("design:paramtypes", [router_1.Router,
            router_1.ActivatedRoute,
            employee_service_1.EmployeeService])
    ], EmployeeDetailComponent);
    return EmployeeDetailComponent;
}());
exports.EmployeeDetailComponent = EmployeeDetailComponent;
//# sourceMappingURL=employee-detail.component.js.map