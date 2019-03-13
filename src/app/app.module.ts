import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AirlineFilterComponent } from './air/airline-filter/airline-filter.component';
import { FlightNumberFilterComponent } from './air/flight-number-filter/flight-number-filter.component';
import { FlightStopsFilterComponent } from './air/flight-stops-filter/flight-stops-filter.component';
import { FlightTimesFilterComponent } from './air/flight-times-filter/flight-times-filter.component';
import { PriceRangeFilterComponent } from './air/price-range-filter/price-range-filter.component';
import { FlightBookingClassFilterComponent } from './air/flight-booking-class-filter/flight-booking-class-filter.component';

@NgModule({
  declarations: [
    AppComponent,
    AirlineFilterComponent,
    FlightNumberFilterComponent,
    FlightStopsFilterComponent,
    FlightTimesFilterComponent,
    PriceRangeFilterComponent,
    FlightBookingClassFilterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
