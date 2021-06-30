import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router , ParamMap} from '@angular/router';
@Component({
  selector: 'app-department-detail',
  template: `
  <p>You selected the department with id= {{departmentId}}</p>
    <p>
    <button style="margin:10px;backgorund-color:gray;" (click)="showOverview()">Overview</button>
    <button  style="margin:10px;backgorund-color:gray;" (click)="showContact()">Contact</button>
    </p>
  <router-outlet></router-outlet>

  <button style="margin:10px;backgorund-color:gray;" (click)="goPrevious()">Previous</button>
  <button  style="margin:10px;backgorund-color:gray;"  (click)="goNext()">Next</button>
  
  <button  style="margin:10px;backgorund-color:gray;" (click)="goToDepartments()" >Back</button>
  `,
  styles: [
  ]
})
export class DepartmentDetailComponent implements OnInit {
  public departmentId:any;
  constructor(private route:ActivatedRoute , private router:Router) { }
  
  ngOnInit(): void {
    
    // let idd = this.route.snapshot.paramMap.get('id');
    // this.departmentId=idd;
   this.route.paramMap.subscribe((params:ParamMap)=>{
     let id=params.get('id');
     this.departmentId=id;
   });
  }
  goPrevious(){
    debugger;
    let PreviousId=parseInt(this.departmentId)-1;
    debugger;
    this.router.navigate(['/departments' ,PreviousId])

  }
  goNext(){
    debugger;
    let nextId=parseInt(this.departmentId)+1;
    debugger;
    this.router.navigate(['/departments' ,nextId])
  }
  goToDepartments(){
    let selectedId=this.departmentId ?this.departmentId:null;
    this.router.navigate(['/departments',{id:selectedId}]);
  }
  showOverview(){
    this.router.navigate(['overview'],{relativeTo:this.route})
  }
  showContact(){
    this.router.navigate(['contact'],{relativeTo:this.route})
  }

}
