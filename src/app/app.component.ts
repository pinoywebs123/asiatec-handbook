import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { HandbookPage } from '../pages/handbook/handbook';
import { DosPage } from '../pages/dos/dos';
import { OrganizationPage } from '../pages/organization/organization';
import { MapsPage } from '../pages/maps/maps';
import { AboutPage } from '../pages/about/about';
import { OfferPage } from '../pages/offer/offer';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'Student Handbook', component: HandbookPage },
      { title: 'Program Offered', component: OfferPage },
      { title: 'Do\'s & Don\'ts', component: DosPage },
      { title: 'School Organization', component: OrganizationPage },
      { title: 'Maps', component: MapsPage },
      { title: 'About', component: AboutPage }
      
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
