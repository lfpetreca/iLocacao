import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LesseesComponent } from './lessees.component';

describe('LesseesComponent', () => {
  let component: LesseesComponent;
  let fixture: ComponentFixture<LesseesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LesseesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LesseesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
