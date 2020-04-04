import { Injectable } from '@angular/core';

import {Booking} from './booking.model';

@Injectable({
  providedIn: 'root'
})
export class BookingsService {

  private bookings: Booking[] = [
    {
      id: 'xyz',
      placeId: 'p1',
      placeTitle: 'Brooklyn Loft',
      guestNumber: 2,
      userId: 'abc'
    }
  ];

  constructor() { }

  get allBookings(){
    return [...this.bookings]
  }
}


