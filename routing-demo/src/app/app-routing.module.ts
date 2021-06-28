import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepartmentListComponent } from './department-list/department-list.component';
import { EmployeeListItIsComponent } from './employee-list-it-is/employee-list-it-is.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  
  //{path:'' , component:EmployeeListItIsComponent},
  {path:'' , redirectTo:'/departments',pathMatch:'full'},
  {path :'departments', component:DepartmentListComponent},
  {path:'employees', component:EmployeeListItIsComponent},
  {path:"**", component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents=[DepartmentListComponent, EmployeeListItIsComponent , PageNotFoundComponent];