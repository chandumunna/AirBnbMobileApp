import { Injectable } from '@angular/core';
import { Place } from './place.model';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {

  private _places: Place[] = [
    new Place('p1', 'Manhattan Mansion', 'In the heart of NYC', 
    'https://i.pinimg.com/originals/69/c2/23/69c223ff61fb4160044e5ba1e9e23d05.jpg', 149.99,
    new Date('2019-01-01'),
    new Date('2020-12-31')),

    new Place('p2', 'Brooklyn Loft', 'In the city center of BRK', 
    'https://decoholic.org/wp-content/uploads/2019/06/industrial-loft-1.jpg', 189.99,
    new Date(),
    new Date('2020-05-31')),

    new Place('p3', 'Under Water Hotel', 'Not your average city trip', 
    'https://media-cache-ec0.pinimg.com/736x/c9/15/1a/c9151a06bcd408d5784509c7c4f3197a.jpg', 499.99,
    new Date('2021-01-01'),
    new Date('2021-12-31'))
  ];


  get places(){
    return [...this._places];
  }

  getPlaceById(id: string){
    return {...this._places.find( p => p.id === id)};
  }

  

  constructor() {}

  getPlace(id: string) {
    return {...this._places.find(p => p.id === id)};
  }

}
