import { Component, OnInit } from '@angular/core';
import { Router , ActivatedRoute , ParamMap} from '@angular/router';
@Component({
  selector: 'app-department-list',
  template: 
    `<h3>
    Department List
    </h3>
    <ul class="items" >
    <li  (click)=onslect(department) [class.selected]="isSelected(department)" *ngFor="let department of departments">
    <span class="badge"> {{department.id}} </span> {{department.name}}
    </li>
    </ul>`
  ,
  styles: []
})
export class DepartmentListComponent implements OnInit {

  public selectedId:any;

  ngOnInit(): void {
    this.route.paramMap.subscribe((params:ParamMap)=>{
      let id=params.get('id');
      this.selectedId=id;
    });
    
  }
  departments =[
    {"id":1 , "name":"Jhon" },
    {"id":2 , "name":"Mathew" },
    {"id":3, "name":"Doe" },
    {"id":4, "name":"Ellie" },
    {"id":5, "name":"ruby" }
  ]

   constructor(private router:Router , private route:ActivatedRoute) { }

  onslect(department:any){
    
    this.router.navigate(['/departments',department.id])
  }
  isSelected(department:any){
    return department.id ===this.selectedId
  }

}
