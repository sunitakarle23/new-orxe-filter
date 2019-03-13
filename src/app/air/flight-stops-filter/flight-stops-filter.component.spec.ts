import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightStopsFilterComponent } from './flight-stops-filter.component';

describe('FlightStopsFilterComponent', () => {
  let component: FlightStopsFilterComponent;
  let fixture: ComponentFixture<FlightStopsFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlightStopsFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlightStopsFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
