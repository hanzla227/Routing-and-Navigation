import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeListItIsComponent } from './employee-list-it-is.component';

describe('EmployeeListItIsComponent', () => {
  let component: EmployeeListItIsComponent;
  let fixture: ComponentFixture<EmployeeListItIsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeListItIsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeListItIsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
