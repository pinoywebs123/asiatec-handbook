import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the FaqinfoPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-faqinfo',
  templateUrl: 'faqinfo.html',
})
export class FaqinfoPage {

  data: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.data = navParams.get("param1");
  }

  ionViewDidLoad() {
    console.log(this.data);
  }

}
