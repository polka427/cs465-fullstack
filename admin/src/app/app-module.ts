import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';

import { TripList } from './trips/trip-list/trip-list';
import { TripCard } from './trips/trip-card/trip-card';
import { AddTrip } from './trips/add-trip/add-trip';
import { EditTrip } from './trips/edit-trip/edit-trip';

import { TripDataService } from './trip-data.service';

@NgModule({
  declarations: [
    App,
    TripList,
    TripCard,
    AddTrip,
    EditTrip
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [TripDataService],
  bootstrap: [App]
})
export class AppModule {}