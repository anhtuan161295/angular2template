import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'
import { Subscription } from 'rxjs';
import { EmployeeService } from './services/employee.service';

@Component({
    selector: 'employee-add-component',
    templateUrl: '/app/employee-add.component.html',
    providers: [EmployeeService]
})

export class EmployeeAddComponent implements OnInit, OnDestroy {
    public _id: number;
    public subscription: any;
    public employee: any;
    constructor(
        private router: Router,
        private activatedRoute: ActivatedRoute,
        public employeeService: EmployeeService) {

    }
    ngOnInit() {
        this.employee = {};
    }
    GotoEmployee() {
        this.router.navigate(['employees']);
    }
    SaveForm() {
        this.employeeService.Add(this.employee).subscribe(response => {
            if (response) {
                alert('Add Success');
                this.router.navigate(['employees']);
            }
        })
    }
    ngOnDestroy() {
        // Angular mới nhất đã tự động unsubscribe nên ko cần gọi unsubscribe nữa
    }
}