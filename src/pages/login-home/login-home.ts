import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

import 'rxjs/add/operator/map';
import { UserVerificationProvider } from '../../providers/user-verification/user-verification';
import { DashboardPage } from '../dashboard/dashboard';


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

  // this variab;e get  the variable input field value 
  email:any;
  password:any;


  constructor(public navCtrl: NavController, public navParams: NavParams, public DashboardService: UserVerificationProvider, public alertCtrl: AlertController) {
  }
  
  // function for the redirection the code
  goTologinSuccess(){
    //console.log('email: '+this.email);
    //console.log('password: '+this.password);
    if(this.email == null || this.password == null ){
      this.validationAlert();

    }else{
     this.DashboardService.signUpDashboard(this.email,this.password).subscribe(data=>{
      console.log(data);
        },err=>{
          console.log(err);
        });
      this.navCtrl.push(DashboardPage);
    }
}

// onclick creating the validation 
validationAlert(){
  const alert = this.alertCtrl.create({
    

  })
  alert.present();
}


  //this.navCtrl.push(SignupPage);

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginHomePage');
  }

}
