import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import 'rxjs/add/operator/map';
import { UserVerificationProvider } from '../../providers/user-verification/user-verification';

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
  employer_name   : string;
  employer_email  : any;
  employer_tel    : number;
  employer_city   : string;
  employer_state  : string;
  employer_country  : string;
  employer_company  : string;
  employer_address   : string;
  employer_website  : string;

  constructor(public navCtrl: NavController, public navParams: NavParams, private employerService: UserVerificationProvider) {
}

// function for using to careate the employer profile
employerHiresignUp(){
    
  this.employerService.employerHireJob(this.employer_name, this.employer_email,this.employer_tel,this.employer_city,this.employer_state, this.employer_country,this.employer_company, this.employer_address, this.employer_website).subscribe(data=>{
    console.log(data);
  },err=>{
    console.log(err);
  });
}

  ionViewDidLoad() {
    console.log('ionViewDidLoad EmployerHirePage');
  }

}
