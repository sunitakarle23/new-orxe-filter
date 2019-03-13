import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AirFiltersComponent } from './air-filters.component';

describe('AirFiltersComponent', () => {
  let component: AirFiltersComponent;
  let fixture: ComponentFixture<AirFiltersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AirFiltersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AirFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
