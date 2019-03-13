import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightBookingClassFilterComponent } from './flight-booking-class-filter.component';

describe('FlightBookingClassFilterComponent', () => {
  let component: FlightBookingClassFilterComponent;
  let fixture: ComponentFixture<FlightBookingClassFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlightBookingClassFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlightBookingClassFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
