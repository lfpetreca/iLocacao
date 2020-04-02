import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LesseesListComponent } from './lessees-list.component';

describe('LesseesListComponent', () => {
  let component: LesseesListComponent;
  let fixture: ComponentFixture<LesseesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LesseesListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LesseesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
