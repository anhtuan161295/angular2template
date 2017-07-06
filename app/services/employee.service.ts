import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class EmployeeService {
    private apiUrl = "http://595d1dc467ae210011cf3e49.mockapi.io/api/employees";

    constructor(private _http: Http) {

    }

    GetList(): Observable<any[]> {
        // Lấy dữ liệu từ url, map vào biến response và trả về json
        return this._http.get(this.apiUrl).map((response: Response) => response.json());
    }
    GetSingle(id: number): Observable<any> {
        // Lấy dữ liệu từ url, map vào biến response và trả về json
        return this._http.get(this.apiUrl + "/" + id).map((response: Response) => response.json());
    }
}