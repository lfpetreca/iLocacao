import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewPropertiesComponent } from './new-properties.component';

describe('NewPropertiesComponent', () => {
  let component: NewPropertiesComponent;
  let fixture: ComponentFixture<NewPropertiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewPropertiesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewPropertiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
