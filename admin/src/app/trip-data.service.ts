import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Trip } from './models/trips';

@Injectable({
  providedIn: 'root'
})
export class TripDataService {
  private baseUrl = 'http://localhost:3000/api/trips';

  constructor(private http: HttpClient) {}

  // I used this method to retrieve all trips from the Express API
  // so the trip listing page can display the current database content.
  getTrips(): Observable<Trip[]> {
    return this.http.get<Trip[]>(this.baseUrl);
  }

  // I used this method to retrieve one trip by tripCode so I can
  // populate the edit form with the selected trip's current values.
  getTripByCode(code: string): Observable<Trip> {
    return this.http.get<Trip>(`${this.baseUrl}/${encodeURIComponent(code)}`);
  }

  // I used this method to create a new trip using a POST request.
  // After saving, the new trip should appear in MongoDB and in the trip cards.
  addTrip(trip: Trip): Observable<Trip> {
    return this.http.post<Trip>(this.baseUrl, trip);
  }

  // I used this method to update an existing trip using a PUT request.
  // This allows me to save edits made in the admin edit screen.
  updateTrip(code: string, trip: Trip): Observable<Trip> {
    return this.http.put<Trip>(`${this.baseUrl}/${encodeURIComponent(code)}`, trip);
  }

  // I used this method to delete a trip so the database and UI stay in sync.
  deleteTrip(code: string): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${encodeURIComponent(code)}`);
  }
}
