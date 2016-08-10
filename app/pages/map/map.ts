import { Component, ViewChild  } from '@angular/core';
import { NavController } from 'ionic-angular';
import { GOOGLE_MAPS_DIRECTIVES, SebmGoogleMap } from 'angular2-google-maps/core';
import { Geolocation } from 'ionic-native';

/*
  Generated class for the MapPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/map/map.html',
  directives: [GOOGLE_MAPS_DIRECTIVES]
})
export class MapPage {
    
  title: string = 'My first angular2-google-maps project';
  lat: number = 51.678418;
  lng: number = 7.809007; 
  zoom :number= 18;  
   watch:any; 
  

  @ViewChild(SebmGoogleMap) map: SebmGoogleMap;
  
  constructor(private navCtrl: NavController) {

  }
  
  ionViewDidEnter() {
    console.log("I'm alive!");
    this.map.triggerResize();

    this.watch = Geolocation.watchPosition().subscribe(pos => {
      this.lat = pos.coords.latitude;
      this.lng = pos.coords.longitude;

      console.log('lat: ' + pos.coords.latitude + ', lon: ' + pos.coords.longitude);
    });

  }
  
  ionViewWillLeave() {
    console.log("Looks like I'm about to leave :(");

    this.watch.unsubscribe();
  }
  
  ionViewDidLeave() {
    console.log("Looks like I did leave :(");
  }

  ionViewWillUnload() {
    console.log("Looks like I will unload :(");
  }
}
