import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { StudentinfoPage } from '../studentinfo/studentinfo';
import { Studentinfo2Page } from '../studentinfo2/studentinfo2';

/**
 * Generated class for the HandbookPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-handbook',
  templateUrl: 'handbook.html',
})
export class HandbookPage {

  data = [
    {id: 113, article : "", content: "Foreword"},
    {id: 112, article : "", content: "Core Values"},
    {id: 111, article : "", content: "Institutional Goals"},
    {id: 1, article : "Article I", content: "Introductory Matters"},
    {id: 2, article : "Article II", content: "ASIATECH as an Educational Institution"},
    {id: 3, article : "Article III", content: "Admission Requirements"},
    {id: 4, article : "Article IV", content: "Enrollment"},
    {id: 5, article : "Article V", content: "Classification of Undergraduate students"},
    {id: 6, article : "Article VI", content: "Grading System"},
    {id: 7, article : "Article VII", content: "Guidelines on Attendance,Absences, and Examination"}
    
  ];

  data2 = [
    {id: 8, article : "Article VIII", content: "Guidelines on Course Dropping"},
    {id: 9, article : "Article IX", content: "Graduation"},
    {id: 10, article : "Article X", content: "Dean's Lister"},
    {id: 11, article : "Article XI", content: "Student Discipline"},
    {id: 12, article : "Article XII", content: "Student Organization"},
    {id: 13, article : "Article XIII", content: "Policy and Procedure for Student's Clearance"},
    
    {id: 15, article : "", content: "ASIATECH LOGO"},
    {id: 16, article : "", content: "ASIATECH Building"},
    {id: 17, article : "", content: "ASIATECH Hymn"}
  ];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HandbookPage');
  }

  clickHandBok(item){
    this.navCtrl.push(StudentinfoPage, item);
  }
  clickHandBok2(item){
    this.navCtrl.push(Studentinfo2Page, item);
  }

}
