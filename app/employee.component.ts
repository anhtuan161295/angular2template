import { Component, OnInit } from '@angular/core';
import { EmployeeService } from './services/employee.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'employee-list',
    templateUrl: '/app/employee.component.html',
    providers: [EmployeeService]
})
export class EmployeeListComponent implements OnInit {
    public employees: any[];
    public pages: number[];
    public currentPage: number;
    public keyword: string;
    constructor(private employeeService: EmployeeService,
        private router: Router, private activatedRoute: ActivatedRoute
    ) {

    }
    ngOnInit() {
        this.activatedRoute.queryParams.subscribe(params => {
            this.currentPage = params['pageNumber'] || 1;
            // console.log(this.currentPage);
            // console.log(params['filter']);
        });
        this.LoadData();
        this.pages = [1, 2, 3, 4, 5];
    }
    Search() {
        this.employeeService.Search(this.keyword).subscribe((response: any) => {
            this.employees = response;
            // console.log(response);
        }, error => {
            console.log(error);
        });
    }
    Delete(id: number) {
        let confirmResult = confirm('Are you sure to delete employee?');
        if (confirmResult) {
            this.employeeService.Delete(id).subscribe(response => {
                if (response) {
                    alert('Delete success');
                    this.LoadData();
                }
            })
        }
    }
    LoadData() {
        // lấy json, subscribe để gán json vào biến response và gắn vào list employees
        this.employeeService.GetList().subscribe((response: any) => {
            this.employees = response;
            // console.log(response);
        }, error => {
            console.log(error);
        });
    }

}