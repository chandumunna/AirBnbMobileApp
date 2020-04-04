import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController, ModalController } from '@ionic/angular';
import { CreateBookingComponent } from 'src/app/bookings/create-booking/create-booking.component';
import { PlacesService } from '../../places.service';
import { Place } from '../../place.model';

@Component({
  selector: 'app-place-detail',
  templateUrl: './place-detail.page.html',
  styleUrls: ['./place-detail.page.scss'],
})
export class PlaceDetailPage implements OnInit {

  place: Place;

  constructor(private router: ActivatedRoute,
              private navCon: NavController,
              private placesService: PlacesService,
              private modalCtrl: ModalController) { }

  ngOnInit() {
    this.router.paramMap.subscribe(paramMap => {
      if (!paramMap.has('placeId')) {
        this.navCon.navigateBack('/places/tabs/discover');
        return;
      }
      this.place = this.placesService.getPlace(paramMap.get('placeId'));
    });

  }

  onBookPlace(){
    this.modalCtrl
    .create({ 
      component: CreateBookingComponent, 
      componentProps: {selectedPlace: this.place}
     })
    .then(modalEl => {
            modalEl.present();
      })
    .then( resultData =>{
        console.log( resultData.data, resultData.role);
      })
  };

}
