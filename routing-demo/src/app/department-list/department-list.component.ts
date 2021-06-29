import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-department-list',
  template: 
    `<h3>
    Department List
    </h3>
    <ul class="items" >
    <li  (click)=onslect(department) *ngFor="let department of departments">
    <span class="badge"> {{department.id}} </span> {{department.name}}
    </li>
    </ul>`
  ,
  styles: []
})
export class DepartmentListComponent implements OnInit {

  ngOnInit(): void {
    
  }
  departments =[
    {"id":1 , "name":"Jhon" },
    {"id":2 , "name":"Mathew" },
    {"id":3, "name":"Doe" },
    {"id":4, "name":"Ellie" },
    {"id":5, "name":"ruby" }
  ]

   constructor(private router:Router) { }

  onslect(department:any){
    debugger
    this.router.navigate(['/departments',department.id])
  }

}
