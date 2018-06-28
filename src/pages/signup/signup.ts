import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import 'rxjs/add/operator/map';

import { UserVerificationProvider } from '../../providers/user-verification/user-verification';
import { VerificationPage } from '../verification/verification';

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
  user_email:string;
  constructor(public navCtrl: NavController, public navParams: NavParams, private userservice:UserVerificationProvider) {
  }
  
  //function for the select the radio button
  goToNextPage(){
    console.log('userrole: '+this.userRole);
    
    if(this.userRole == 'employer'){
      this.navCtrl.push(VerificationPage);
    }
    if(this.userRole == 'employee'){
      this.navCtrl.push(VerificationPage);
    }
      // data will be send here
     this.userservice.userEmailVerification(this.user_email, this.userRole).subscribe(data=>{
      console.log(data);
    },err=>{
      console.log(err);
    });
  }




  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }

}
