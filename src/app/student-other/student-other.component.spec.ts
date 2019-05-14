import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentOtherComponent } from './student-other.component';

describe('StudentOtherComponent', () => {
  let component: StudentOtherComponent;
  let fixture: ComponentFixture<StudentOtherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentOtherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentOtherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
