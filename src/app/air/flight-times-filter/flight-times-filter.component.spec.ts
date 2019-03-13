import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightTimesFilterComponent } from './flight-times-filter.component';

describe('FlightTimesFilterComponent', () => {
  let component: FlightTimesFilterComponent;
  let fixture: ComponentFixture<FlightTimesFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlightTimesFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlightTimesFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
