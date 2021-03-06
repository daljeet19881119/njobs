import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import 'rxjs/add/operator/map';
import { UserVerificationProvider } from '../../providers/user-verification/user-verification';

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
  employee_name   : string;
  employee_email  : any;
  employee_tel    : string;
  employee_city   : string;
  employee_state  : string;
  employee_country: string;
  employee_first  : string;
  employee_second : string;
 


  constructor(public navCtrl: NavController, public navParams: NavParams, private candidateService: UserVerificationProvider, public alertCtrl :AlertController ) {
    
 
 }
  
  // onclick signup the candidatte form
  candidateSignUp(){

   // validation to check theinput field is empty or not 
    if(this.employee_name == null ||  this.employee_email == null || this.employee_tel == null ||  this.employee_city == null || this.employee_state == null || this.employee_country == null || this.employee_first == null || this.employee_second == null){
      //this.validationAlert();
     }else{
    
        // data will be send here by json
        this.candidateService.candidateFresherJob(this.employee_name, this.employee_email, this.employee_tel,this.employee_city, this.employee_state,this.employee_country, this.employee_first, this.employee_second).subscribe(data=>{
             console.log(data);
        });
        }  //end here thevalidation 
       
  }

 
  validationAlert(){
    const alert = this.alertCtrl.create({
     

    })
    alert.present();
  }

   

  ionViewDidLoad() {
    console.log('ionViewDidLoad EmployeeejobPage');
  }

}
