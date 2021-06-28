import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepartmentListComponent } from './department-list/department-list.component';
import { EmployeeListItIsComponent } from './employee-list-it-is/employee-list-it-is.component';

const routes: Routes = [
  {path :'departments', component:DepartmentListComponent},
  {path:'employees', component:EmployeeListItIsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents=[DepartmentListComponent, EmployeeListItIsComponent];
