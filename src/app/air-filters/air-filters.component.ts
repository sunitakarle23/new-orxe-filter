import { Component, OnInit } from '@angular/core';
import { AirFilterServiceService } from '../services/air-filter-service.service';
import { AirlineFilter } from '../entities/entities';
import { FormBuilder, FormGroup, FormArray, FormControl } from '@angular/forms';

@Component({
  selector: 'app-air-filters',
  templateUrl: './air-filters.component.html',
  styleUrls: ['./air-filters.component.css']
})
export class AirFiltersComponent implements OnInit {
  airFilters: {} = AirlineFilter; 
  ApplyAirFilterForm: FormGroup;
  constructor(private airService:AirFilterServiceService, private formBuilder: FormBuilder) { 
    this.ApplyAirFilterForm = this.formBuilder.group({
      stopsFilter: new FormArray([]),
      airLineFilter: new FormArray([])
    });
  }
  
  ngOnInit() {
    
    this.airService.createFilters().subscribe((res) => {
      this.airFilters = res;
      console.log("this.airFilters=>", this.airFilters);

    });
  }

  onSubmit() {
    console.log("@@@@@@@@ checked value",this.ApplyAirFilterForm.value);
  }

}
