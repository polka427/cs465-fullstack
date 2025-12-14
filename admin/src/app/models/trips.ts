// I created this interface to define the structure of a Trip object.
// This allows Angular to enforce consistent data types when
// retrieving, creating, and updating trips from the Express API.

export interface Trip {
  _id?: string;          // MongoDB automatically generates this field
  tripCode: string;
  tripName: string;
  tripLength: string;
  tripStart: string;
  tripResort: string;
  tripPerPerson: number;
  tripImage: string;
  tripDescription: string;
}
