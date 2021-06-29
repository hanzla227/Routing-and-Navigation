import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router , ParamMap} from '@angular/router';
@Component({
  selector: 'app-department-detail',
  template: `
  <p>Department detail works {{departmentId}}</p>
  <button style="margin:10px;backgorund-color:grey;" (click)="goPrevious()">Previous</button>
  <button  style="margin:10px;backgorund-color:grey;" (click)="goNext()">Next</button>
  
  `,
  styles: [
  ]
})
export class DepartmentDetailComponent implements OnInit {
  public departmentId:any;
  constructor(private route:ActivatedRoute , private router:Router) { }
  
  ngOnInit(): void {
    
    let idd = this.route.snapshot.paramMap.get('id');
    this.departmentId=idd;
    // this.route.paramMap.subscribe((params:ParamMap)=>{
    //   let id=parseInt(params.get('id'));
    //   this.departmentId=id;
    // });
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

}
