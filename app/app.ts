import {Component} from '@angular/core';
import {Platform, ionicBootstrap, MenuController} from 'ionic-angular';
import {StatusBar} from 'ionic-native';
import {HomePage} from './pages/home/home';
import {MapPage} from './pages/map/map';
import {GOOGLE_MAPS_PROVIDERS, provideLazyMapsAPILoaderConfig} from 'angular2-google-maps/core';

@Component({
  template: `
    <ion-menu [content]="content">
      <ion-toolbar>
        <ion-title>Menu</ion-title>
      </ion-toolbar>
      <ion-content>
        <ion-list>
          <ion-list-header>
             Navigate
          </ion-list-header>
          
          <button ion-item (click)="openPage(homePage)">
            <ion-icon  item-left name="home"></ion-icon>
            Home
          </button>

          <button ion-item (click)="openPage(mapPage)">
            <ion-icon  item-left name="map"></ion-icon>
            Map
          </button>

        </ion-list>
       
      </ion-content>
    </ion-menu>

    <ion-nav id="nav" #content [root]="rootPage"></ion-nav>`
})
export class MyApp {
  rootPage: any = HomePage;
  private homePage      = HomePage;
  private mapPage      = MapPage;
  
  constructor(platform: Platform, private menu: MenuController) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
    });
  }
  
  openPage(page) {
    // Reset the nav controller to have just this page
    // we wouldn't want the back button to show in this scenario
    this.rootPage = page;

    // close the menu when clicking a link from the menu
    this.menu.close();
  }
}

ionicBootstrap(MyApp, 
        [GOOGLE_MAPS_PROVIDERS, provideLazyMapsAPILoaderConfig({ apiKey: 'AIzaSyD5_XlG9ZRyWUjFQKb29WXkCZ8N4C0dIrI' })], 
        { prodMode: true, menuType: "overlay", scrollAssist: true, autoFocusAssist: false });
