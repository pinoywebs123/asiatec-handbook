import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the OrganizationinfoPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-organizationinfo',
  templateUrl: 'organizationinfo.html',
})
export class OrganizationinfoPage {
  departments = [
    {id:1, title: "Bachelor of Science in Information Technology", image: "img/bsit.png", adviser: " Mrs. Aida C. Tuazon", description: "Computer Hybrid Information Professional Society (CHIPS)"},
    {id:2, title: "Bachelor of Science in Computer Science", image: "img/bscs.jpg", adviser: "Mr. Robert Dimaranan", description: " Computer System Information System (CURSOR)"},
    {id:3, title: "Bachelor of Science in Computer Engineering", image: "img/comp.png", adviser: "Mr. Robert Dimaranan", description: "Mathematicians Computer Engineering Society (MACES)"},
    {id:4, title: "Bachelor of Science in Secondary Education", image: "img/bsed.jpg", adviser: "Mr. Niel Silva", description: "Asiatech Society of Competent Efficient and Responsible Teachers (ASCERT)"},
    {id:5, title: "Bachelor of Science in Business Administration", image: "img/bsba.png", adviser: "Mrs. Ailyn Barroso", description: "Junior Business Administrators (JBA)"},
    {id:6, title: "Bachelor of Science in Tourism Management", image: "img/tourism.jpg", adviser: "Mrs. Fereen Gomez", description: "Junior Institute of Tour and Travel Executive (JITTRE)"},
    {id:7, title: "Bachelor of Science in Hotel & Restaurant Management", image: "img/hrm.jpg", adviser: "Mrs. Grace Ramos", description: "Association of Hoteliers Restaurateur Management Society (AHRMS)"}

  ]
  data : any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.data = this.navParams.data;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OrganizationinfoPage');
  }

}
