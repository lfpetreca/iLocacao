import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RentersDetailsComponent } from './renters-details.component';

describe('RentersDetailsComponent', () => {
  let component: RentersDetailsComponent;
  let fixture: ComponentFixture<RentersDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RentersDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RentersDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
