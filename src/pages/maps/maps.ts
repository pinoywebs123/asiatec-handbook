import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { MapinfoPage } from '../mapinfo/mapinfo';

/**
 * Generated class for the MapsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-maps',
  templateUrl: 'maps.html',
})
export class MapsPage {
  data = [
    {id: 1, content: "Vicinity Map of ASIATECH"},
    {id: 2, content: "Ground Floor"},
    {id: 3, content: "Second Floor"},
    {id: 4, content: "Third Floor"},
    {id: 5, content: "Fourth Floor"},
  ];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MapsPage');
  }

  clickMap(item){
    this.navCtrl.push(MapinfoPage, item);
  }

}
