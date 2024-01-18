import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatTeacherComponent } from './creat-teacher.component';

describe('CreatTeacherComponent', () => {
  let component: CreatTeacherComponent;
  let fixture: ComponentFixture<CreatTeacherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatTeacherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatTeacherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
