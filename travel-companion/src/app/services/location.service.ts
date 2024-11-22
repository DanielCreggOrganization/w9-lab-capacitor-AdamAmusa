import { Injectable } from '@angular/core';
import { Geolocation } from '@capacitor/geolocation';

@Injectable({
  providedIn: 'root'
})
export class LocationService {
  constructor() { }

  

  async getCurrentPosition() {
    const coordinates = await Geolocation.getCurrentPosition();
    return coordinates;
  }
}