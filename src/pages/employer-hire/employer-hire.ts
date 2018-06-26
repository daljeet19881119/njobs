import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the EmployerHirePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-employer-hire',
  templateUrl: 'employer-hire.html',
})
export class EmployerHirePage {
  employer_name: string;
  employer_email:string;
  employer_tel: number;
  employer_city: string;
  employer_state:string;
  employer_country:string;
  employer_company: string;
  employer_adress:  string;
  employer_website: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  
  //insert the data here
  // insertEmployer(){
  //   var headers: new Headers();

  //   let postParams = { data:{

  //   }};

  // }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EmployerHirePage');
  }

}
