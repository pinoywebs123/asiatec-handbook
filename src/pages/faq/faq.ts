import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { FaqinfoPage } from '../faqinfo/faqinfo';


@Component({
  selector: 'page-faq',
  templateUrl: 'faq.html',
})
export class FaqPage {
  data = [
    {'id': 1, 'content': 'What is the formula to get the Class Standing?'},
    {'id': 2, 'content': 'How to compute the General Average Grade?'},
    {'id': 3, 'content': 'What is the grade conversion of ASIATECH?'},
    {'id': 4, 'content': 'How many late is considered as absent?'},
    {'id': 5, 'content': 'How to become a Dean\'s Lister?'},
    {'id': 6, 'content': 'What is the Average to be qualifies an Honor Student?'},
    {'id': 7, 'content': 'What is requirement of shifting of Programs?'},
    {'id': 8, 'content': 'When do you need to renew you Student ID?'},
    {'id': 9, 'content': 'What is the Refund Policy of ASIATECH?'},
    {'id': 10, 'content': 'What are the Guidelines on Course Dropping?'},
  ];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log(this.data);
  }

  clickFaq(id){
    this.navCtrl.push(FaqinfoPage, {param1: id});
  }

}
