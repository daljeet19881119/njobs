import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SignupPage } from '../signup/signup';


/**
 * Generated class for the LoginHomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login-home',
  templateUrl: 'login-home.html',
})
export class LoginHomePage {

  // create the variable 
  email:any;
  password:any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  
  // function for the redirection the code
  goTologinSuccess(){
    //console.log('email: '+this.email);
    //console.log('password: '+this.password);
    if(this.email == 'aman@gmail.com' && this.password == '123456'){

    
    this.navCtrl.push(SignupPage);
    }else{
      alert('login faild plz check it');
    }

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginHomePage');
  }

}
