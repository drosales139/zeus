import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeComponentPage } from './employee.page';

describe('EmployeeComponent', () => {
  let component: EmployeeComponentPage;
  let fixture: ComponentFixture<EmployeeComponentPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeComponentPage ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeComponentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
