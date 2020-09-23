import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewRentersComponent } from './new-renters.component';

describe('NewRentersComponent', () => {
  let component: NewRentersComponent;
  let fixture: ComponentFixture<NewRentersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewRentersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewRentersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
