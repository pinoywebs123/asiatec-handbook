import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { OrganizationinfoPage } from '../organizationinfo/organizationinfo';

/**
 * Generated class for the OrganizationPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-organization',
  templateUrl: 'organization.html',
})
export class OrganizationPage {
  data = [
    {id: 1, content: "School Organizational Chart"},
    {id: 2, content: "Department Organization and Advisers"},
    {id: 3, content: "Faculty Members"},
    {id: 4, content: "Supreme Student Council (SSC)"},
  ];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OrganizationPage');
  }

  clickOrganization(item){
    this.navCtrl.push(OrganizationinfoPage, item);
  }

}
