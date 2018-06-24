import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EmployerHirePage } from '../employer-hire/employer-hire';
import { EmployeeejobPage } from '../employeeejob/employeeejob';

/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {

  //define the variable
  userRole :string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  
  // function for the select the radio button
  goToNextPage(){
    //console.log('userrole: '+this.userRole);
    
    if(this.userRole == 'employer'){
      this.navCtrl.push(EmployerHirePage);
    }
    if(this.userRole == 'employee'){
      this.navCtrl.push(EmployeeejobPage);
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }

}
