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
var employee_service_1 = require("./services/employee.service");
var router_1 = require("@angular/router");
var EmployeeListComponent = (function () {
    function EmployeeListComponent(employeeService, router, activatedRoute) {
        this.employeeService = employeeService;
        this.router = router;
        this.activatedRoute = activatedRoute;
    }
    EmployeeListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.queryParams.subscribe(function (params) {
            _this.currentPage = params['pageNumber'] || 1;
            // console.log(this.currentPage);
            // console.log(params['filter']);
        });
        this.LoadData();
        this.pages = [1, 2, 3, 4, 5];
    };
    EmployeeListComponent.prototype.Search = function () {
        var _this = this;
        this.employeeService.Search(this.keyword).subscribe(function (response) {
            _this.employees = response;
            // console.log(response);
        }, function (error) {
            console.log(error);
        });
    };
    EmployeeListComponent.prototype.Delete = function (id) {
        var _this = this;
        var confirmResult = confirm('Are you sure to delete employee?');
        if (confirmResult) {
            this.employeeService.Delete(id).subscribe(function (response) {
                if (response) {
                    alert('Delete success');
                    _this.LoadData();
                }
            });
        }
    };
    EmployeeListComponent.prototype.LoadData = function () {
        var _this = this;
        // lấy json, subscribe để gán json vào biến response và gắn vào list employees
        this.employeeService.GetList().subscribe(function (response) {
            _this.employees = response;
            // console.log(response);
        }, function (error) {
            console.log(error);
        });
    };
    EmployeeListComponent = __decorate([
        core_1.Component({
            selector: 'employee-list',
            templateUrl: '/app/employee.component.html',
            providers: [employee_service_1.EmployeeService]
        }),
        __metadata("design:paramtypes", [employee_service_1.EmployeeService,
            router_1.Router, router_1.ActivatedRoute])
    ], EmployeeListComponent);
    return EmployeeListComponent;
}());
exports.EmployeeListComponent = EmployeeListComponent;
//# sourceMappingURL=employee.component.js.map