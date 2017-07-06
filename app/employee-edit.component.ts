import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'
import { Subscription } from 'rxjs';
import { EmployeeService } from './services/employee.service';

@Component({
    selector: 'employee-edit-component',
    templateUrl: '/app/employee-edit.component.html',
    providers: [EmployeeService]
})

export class EmployeeEditComponent implements OnInit, OnDestroy {
    public _id: number;
    public subscription: any;
    public employee: any;
    constructor(
        private router: Router,
        private activatedRoute: ActivatedRoute,
        public employeeService: EmployeeService) {

    }
    ngOnInit() {
        // Lấy id từ url param
        this.subscription = this.activatedRoute.params.subscribe(params => {
            this._id = params['id'];
        });
        // Get object employee dựa trên id
        this.employeeService.GetSingle(this._id).subscribe((data) => {
            this.employee = data;
            // console.log(data);
        });
    }
    GotoEmployee() {
        this.router.navigate(['employees']);
    }
    SaveForm(){
        this.employeeService.Update(this._id,this.employee).subscribe(response=>{
            if(response){
                alert('Update Success');
            }
        })
    }
    ngOnDestroy() {
        // Angular mới nhất đã tự động unsubscribe nên ko cần gọi unsubscribe nữa
    }
}