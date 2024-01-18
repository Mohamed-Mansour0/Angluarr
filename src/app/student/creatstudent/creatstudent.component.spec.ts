import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatstudentComponent } from './creatstudent.component';

describe('CreatstudentComponent', () => {
  let component: CreatstudentComponent;
  let fixture: ComponentFixture<CreatstudentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatstudentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatstudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
