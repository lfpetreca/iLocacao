import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgreementsDetailsComponent } from './agreements-details.component';

describe('AgreementsDetailsComponent', () => {
  let component: AgreementsDetailsComponent;
  let fixture: ComponentFixture<AgreementsDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgreementsDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgreementsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
