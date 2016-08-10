import { Component, ViewChild  } from '@angular/core';
import { NavController } from 'ionic-angular';
import { GOOGLE_MAPS_DIRECTIVES, SebmGoogleMap } from 'angular2-google-maps/core';
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
  
  @ViewChild(SebmGoogleMap) map: SebmGoogleMap;
  
  constructor(private navCtrl: NavController) {

  }
  
  ionViewDidEnter() {
    console.log("I'm alive!");
    this.map.triggerResize();
  }
  
  ionViewWillLeave() {
    console.log("Looks like I'm about to leave :(");
  }
  
  ionViewDidLeave() {
    console.log("Looks like I did leave :(");
  }

  ionViewWillUnload() {
    console.log("Looks like I will unload :(");
  }
}
