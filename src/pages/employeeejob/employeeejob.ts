import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the EmployeeejobPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-employeeejob',
  templateUrl: 'employeeejob.html',
})
export class EmployeeejobPage {
  employee_name:  string;
  employee_email: string;
  employee_tel :  string;
  employee_city:  string;
  employee_state: string;
  employee_country:string;
  employee_first:  string;
  employee_second: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EmployeeejobPage');
  }

}
