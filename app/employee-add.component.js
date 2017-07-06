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
var EmployeeAddComponent = (function () {
    function EmployeeAddComponent(router, activatedRoute, employeeService) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.employeeService = employeeService;
    }
    EmployeeAddComponent.prototype.ngOnInit = function () {
        this.employee = {};
    };
    EmployeeAddComponent.prototype.GotoEmployee = function () {
        this.router.navigate(['employees']);
    };
    EmployeeAddComponent.prototype.SaveForm = function () {
        var _this = this;
        this.employeeService.Add(this.employee).subscribe(function (response) {
            if (response) {
                alert('Add Success');
                _this.router.navigate(['employees']);
            }
        });
    };
    EmployeeAddComponent.prototype.ngOnDestroy = function () {
        // Angular mới nhất đã tự động unsubscribe nên ko cần gọi unsubscribe nữa
    };
    EmployeeAddComponent = __decorate([
        core_1.Component({
            selector: 'employee-add-component',
            templateUrl: '/app/employee-add.component.html',
            providers: [employee_service_1.EmployeeService]
        }),
        __metadata("design:paramtypes", [router_1.Router,
            router_1.ActivatedRoute,
            employee_service_1.EmployeeService])
    ], EmployeeAddComponent);
    return EmployeeAddComponent;
}());
exports.EmployeeAddComponent = EmployeeAddComponent;
//# sourceMappingURL=employee-add.component.js.map