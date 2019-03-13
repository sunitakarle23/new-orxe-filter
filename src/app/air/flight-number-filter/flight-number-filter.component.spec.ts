import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightNumberFilterComponent } from './flight-number-filter.component';

describe('FlightNumberFilterComponent', () => {
  let component: FlightNumberFilterComponent;
  let fixture: ComponentFixture<FlightNumberFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlightNumberFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlightNumberFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
