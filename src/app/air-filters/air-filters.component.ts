import { Component, OnInit } from '@angular/core';
import { AirFilterServiceService } from '../services/air-filter-service.service';
import { AirlineFilter } from '../entities/entities';
import { FormBuilder, FormGroup, FormArray, FormControl } from '@angular/forms';
import _ from 'lodash';

@Component({
  selector: 'app-air-filters',
  templateUrl: './air-filters.component.html',
  styleUrls: ['./air-filters.component.css']
})

export class AirFiltersComponent implements OnInit {
  airFilters: {} = AirlineFilter; 
  airlineFilters: [];
  stopsFilter: [];
  form: FormGroup;

  constructor(private airService:AirFilterServiceService, private formBuilder: FormBuilder) { 
    this.form = this.formBuilder.group({
      airlineFilters: new FormArray([]),
      stopsFilter: new FormArray([])
    });
  }
  
  //create dynamic filters 
  private createFilters() {
    if(!_.isEmpty(this.airlineFilters)){
      this.airlineFilters.map((o, i) => {
        (this.form.controls.airlineFilters as FormArray).push(new FormControl());
      });
    }
    if(!_.isEmpty(this.stopsFilter)) {
      this.stopsFilter.map((o, i) => {
        (this.form.controls.stopsFilter as FormArray).push(new FormControl());
      });
    }
  }

  ngOnInit() {
    this.airService.createFilters().subscribe((res) => {
      this.airFilters = res;
      console.log("@@@@@@@@@res", res)
      this.airlineFilters = this.airFilters['Airlines'];
      this.stopsFilter = this.airFilters['Stops'];
      this.createFilters();
    });
  }
  onChange(event) {
    console.log( event.source.value)
    //this.airlineFilters.push(event.source.value)
  }
  submit() {
    console.log(this.form.value);
  }

}
