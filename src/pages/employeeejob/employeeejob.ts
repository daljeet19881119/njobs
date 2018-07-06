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
  dataaction :any;




  constructor(public navCtrl: NavController, public navParams: NavParams, private candidateService: UserVerificationProvider , public alertCtrl :AlertController ) {
    let  formData =  {"result":"success","data":{"user_id":"12","name":"VikramThakur","email":"vicky@srivyom.com","password":"f2f98673002944f18ec004aff64622ba5e99634733ce492894d62aeb693a23a8e9628d6487455588488db2eb8ea11921f83c7a5390601c5a33ec99297d402b3b"},
    "events":[{"event_id":"8","event_name":"Event 1","event_prefix":"FQQBKIZUID","client_id":"38","client_employee_id":"18","event_type":"7","created_at":"2018-07-05 00:00:00","updated_at":"2018-07-05 00:00:00"},{"event_id":"10","event_name":"Event 2","event_prefix":"2SW2JEZ6B3","client_id":"38","client_employee_id":"19","event_type":"7","created_at":"2018-07-05 00:00:00","updated_at":"2018-07-10 00:00:00"}],"yard":[{"yard_id":"1","site_id":"7","event_id":"8","preset_value":"1","landlord_name":"Vikram Thakur","landlord_phone":"123454444","landlord_email":"demo@example.com","f_management":"1","f_sitelead":"","f_asstsitelead":"","f_admin":"1","f_intakelead":"","f_teammembers":"","f_securitylead":"","f_ecoordinator":"","f_eteammembers":"1","f_routingcoordinator":"","f_suppyrunner":"","f_electrical":"","f_fueling":"","f_240crews":"","f_mechanical":"1","f_loadbank":"","f_survey":"","f_cooks":"","f_drivers":"","f_welders":"","f_safety":"1","f_other":"","assets":"a:1:{i:12;s:14:\"Air Compressor\";}","created_at":"2018-06-11 05:40:55","updated_at":"2018-06-14 18:15:55"},{"yard_id":"3","site_id":"7","event_id":"8","preset_value":"1","landlord_name":"Orville E. Seeber","landlord_phone":"2528226941","landlord_email":"eeseeber4@yopmail.com","f_management":"1","f_sitelead":"","f_asstsitelead":"","f_admin":"1","f_intakelead":"","f_teammembers":"","f_securitylead":"","f_ecoordinator":"","f_eteammembers":"1","f_routingcoordinator":"","f_suppyrunner":"","f_electrical":"","f_fueling":"","f_240crews":"","f_mechanical":"1","f_loadbank":"","f_survey":"","f_cooks":"","f_drivers":"","f_welders":"","f_safety":"1","f_other":"","assets":"a:3:{i:12;s:14:\"Air Compressor\";i:25;s:17:\"Hand Wash Station\";i:21;s:16:\"Bath and Showers\";}","created_at":"2018-06-16 00:22:47","updated_at":"2018-06-15 17:22:47"}]};

  // this.dataaction = Object.keys(formData.events);
  //  this.dataaction = Object.values(formData.events);
   this.dataaction = JSON.stringify(formData);
   
 
  }
  
  // onclick signup the candidatte form
  candidateSignUp(){

   // validation to check theinput field is empty or not 
    if(this.employee_name == null ||  this.employee_email == null || this.employee_tel == null ||  this.employee_city == null || this.employee_state == null || this.employee_country == null || this.employee_first == null || this.employee_second == null){
      this.validationAlert();
     }else{
    
        // data will be send here by json
        this.candidateService.candidateFresherJob(this.employee_name, this.employee_email, this.employee_tel,this.employee_city, this.employee_state,this.employee_country, this.employee_first, this.employee_second).subscribe(data=>{
          
          console.log(data);
           //this.dataaction = [];
          //  for(dataaction ) 
          // {
          //   this.push({
             
          //   });
          // }
        },err=>{
          console.log(err);
        });
    } //end here thevalidation 

  }

  validationAlert(){
    const alert = this.alertCtrl.create({
    //data ='plz fill the all field';
    })
    alert.present();
  }

  
  itemSelected(dataaction) 
 {
    this.navCtrl.push(EmployeeejobPage, {dataaction: dataaction});
   
 }

   

  ionViewDidLoad() {
    console.log('ionViewDidLoad EmployeeejobPage');
  }

}
