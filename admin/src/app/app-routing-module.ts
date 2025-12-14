import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TripList } from './trips/trip-list/trip-list';
import { AddTrip } from './trips/add-trip/add-trip';
import { EditTrip } from './trips/edit-trip/edit-trip';

const routes: Routes = [
  { path: '', component: TripList, pathMatch: 'full' },
  { path: 'list-trips', component: TripList },
  { path: 'add-trip', component: AddTrip },
  { path: 'edit-trip', component: EditTrip },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }