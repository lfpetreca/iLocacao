import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewRenterComponent } from './new-renter.component';

describe('NewRenterComponent', () => {
  let component: NewRenterComponent;
  let fixture: ComponentFixture<NewRenterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewRenterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewRenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
