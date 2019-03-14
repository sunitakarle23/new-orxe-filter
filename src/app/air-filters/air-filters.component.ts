import { Component, OnInit } from '@angular/core';
import { AirFilterServiceService } from '../services/air-filter-service.service';
import { AirlineFilter } from '../entities/entities'

@Component({
  selector: 'app-air-filters',
  templateUrl: './air-filters.component.html',
  styleUrls: ['./air-filters.component.css']
})
export class AirFiltersComponent implements OnInit {
  airFilters: {} = AirlineFilter; 
  panelOpenState = true;
  constructor(private airService:AirFilterServiceService) { }
  
  ngOnInit() {
    this.airService.createFilters().subscribe((res) => {
      this.airFilters = res;
      console.log("this.airFilters=>", this.airFilters);

    });
  }

  onAirlineChange(event) {
    console.log("@@@@@@@@ checked value",event.value);
  }

}
