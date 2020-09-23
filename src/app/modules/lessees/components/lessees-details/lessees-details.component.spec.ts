import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LesseesDetailsComponent } from './lessees-details.component';

describe('LesseesDetailsComponent', () => {
  let component: LesseesDetailsComponent;
  let fixture: ComponentFixture<LesseesDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LesseesDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LesseesDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
