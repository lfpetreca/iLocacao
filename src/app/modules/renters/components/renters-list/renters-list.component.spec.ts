import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RentersListComponent } from './renters-list.component';

describe('RentersListComponent', () => {
  let component: RentersListComponent;
  let fixture: ComponentFixture<RentersListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RentersListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RentersListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
