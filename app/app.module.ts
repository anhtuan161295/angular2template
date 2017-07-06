import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { FormsModule } from '@angular/forms';
import { EmployeeListComponent } from './employee.component';
import { EmployeeService } from './services/employee.service';
import { HomeComponent } from './home.component';
import { HttpModule } from "@angular/http";
import { appRoutes } from './app.routes';


@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpModule, appRoutes ],
  declarations: [ AppComponent, EmployeeListComponent, HomeComponent ],
  providers:    [ EmployeeService ] ,
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
