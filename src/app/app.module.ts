import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { HandbookPage } from '../pages/handbook/handbook';
import { DosPage } from '../pages/dos/dos';
import { OrganizationPage } from '../pages/organization/organization';
import { MapsPage } from '../pages/maps/maps';
import { AboutPage } from '../pages/about/about';
import { StudentinfoPage } from '../pages/studentinfo/studentinfo';
import { Studentinfo2Page } from '../pages/studentinfo2/studentinfo2';
import { DoinfoPage } from '../pages/doinfo/doinfo';
import { OfferPage } from '../pages/offer/offer';
import { MapinfoPage } from '../pages/mapinfo/mapinfo';
import { OrganizationinfoPage } from '../pages/organizationinfo/organizationinfo';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    HandbookPage,
    DosPage,
    OrganizationPage,
    MapsPage,
    AboutPage,
    StudentinfoPage,
    DoinfoPage,
    OfferPage,
    MapinfoPage,
    OrganizationinfoPage,
    Studentinfo2Page
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    HandbookPage,
    DosPage,
    OrganizationPage,
    MapsPage,
    AboutPage,
    StudentinfoPage,
    DoinfoPage,
    OfferPage,
    MapinfoPage,
    OrganizationinfoPage,
    Studentinfo2Page
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
