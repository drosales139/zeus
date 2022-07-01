import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupComponentPage } from './group.page';

describe('GroupComponent', () => {
  let component: GroupComponentPage;
  let fixture: ComponentFixture<GroupComponentPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GroupComponentPage ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GroupComponentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
