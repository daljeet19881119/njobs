import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SignupPage } from '../signup/signup';
import { LoginHomePage } from '../login-home/login-home';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  
  // this function to call the signup page
  goToSignUpPage(){
    this.navCtrl.push(SignupPage);
  }

  // this function to direct goes to login
  goToLoginHomePage(){
    this.navCtrl.push(LoginHomePage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
 

}
