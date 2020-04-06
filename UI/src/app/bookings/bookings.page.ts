import { Component, OnInit, OnDestroy } from '@angular/core';
import { IonItemSliding, LoadingController } from '@ionic/angular';

import { Booking } from './booking.model';
import { Subscription } from 'rxjs';
import { BookingsService } from './bookings.service';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.page.html',
  styleUrls: ['./bookings.page.scss'],
})
export class BookingsPage implements OnInit, OnDestroy {
  loadedBookings: Booking[];
  bookingSub: Subscription;

  constructor(private bookingService: BookingsService,
              private loadingCtrl: LoadingController) { 
  }

  ngOnInit() {
    this.bookingSub = this.bookingService.bookings.subscribe(bookings =>{
      this.loadedBookings = bookings;
    })
  }

  onCancelBooking(bookingId: string, slidingEl: IonItemSliding) {
    slidingEl.close();
    this.loadingCtrl.create({message: 'Canceling...'}).then(loadingEl => {
      loadingEl.present();
      this.bookingService.cancelBooking(bookingId).subscribe();
      loadingEl.dismiss();
    })
  }

  ngOnDestroy(){

    if(this.bookingSub){
      this.bookingSub.unsubscribe();
    }
  }
}
