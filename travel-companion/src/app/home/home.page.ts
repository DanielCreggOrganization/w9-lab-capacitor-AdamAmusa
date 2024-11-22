import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';
import { CameraService } from '../services/camera.service';
import { IonButton } from '@ionic/angular/standalone';
import { defineCustomElements } from '@ionic/pwa-elements/loader';
import { LocationService } from '../services/location.service';

defineCustomElements(window);
// import PWaCem (assuming this was an incomplete import and not needed)

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonButton],

})
export class HomePage {
  constructor(private camera:CameraService, private location:LocationService) {}

  async takePicture() {
    const photo = await this.camera.takePicture();  
  }

  async getLocation() {
    const location = await this.location.getCurrentPosition();
    const locationElement = document.getElementById('location');
    if (locationElement) {
      locationElement.innerText = `Latitude: ${location.coords.latitude}, Longitude: ${location.coords.longitude}`;
    }

  }
}
