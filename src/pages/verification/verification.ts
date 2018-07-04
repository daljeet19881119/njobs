import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import 'rxjs/add/operator/map';
import { UserVerificationProvider } from '../../providers/user-verification/user-verification';


/**
 * Generated class for the VerificationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-verification',
  templateUrl: 'verification.html',
})
export class VerificationPage {
  user_email:any;
  userRole:string;

  constructor(public navCtrl: NavController, public navParams: NavParams, private userservice: UserVerificationProvider) {
  }

  //verifaction the email and insert the data
  verificationEmail(){
    // data will be send here
    this.userservice.userEmailVerification(this.user_email,this.userRole).subscribe(data=>{
      console.log(data);
    },err=>{
      console.log(err);
    });
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad VerificationPage');
  }

}
