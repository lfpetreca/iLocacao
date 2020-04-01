import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewLesseesComponent } from './new-lessees.component';

describe('NewLesseesComponent', () => {
  let component: NewLesseesComponent;
  let fixture: ComponentFixture<NewLesseesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewLesseesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewLesseesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
