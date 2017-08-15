import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { DoinfoPage } from '../doinfo/doinfo';

/**
 * Generated class for the DosPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-dos',
  templateUrl: 'dos.html',
})
export class DosPage {
  data = [
    {id: 1, content: "School"},
    {id: 2, content: "Computer Laboratory"},
    
    {id: 4, content: "Library"},
  ];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DosPage');
  }

  clickDo(item){
    this.navCtrl.push( DoinfoPage, item);
  }

}
