import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule }    from '@angular/common/http';
import { AppComponent } from './app.component';
import { AirFiltersComponent } from './air-filters/air-filters.component';
import {MatButtonModule, MatExpansionModule, MatFormFieldModule, MatInputModule, MatCheckboxModule} from '@angular/material';
import {BrowserAnimationsModule}  from '@angular/platform-browser/animations'

@NgModule({
  declarations: [
    AppComponent,
    AirFiltersComponent,
  
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatButtonModule,
    MatExpansionModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatCheckboxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
