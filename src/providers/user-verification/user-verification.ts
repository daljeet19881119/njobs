
import { Injectable } from '@angular/core';
import {Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the UserVerificationProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UserVerificationProvider {
   
  constructor(private http: Http) {
    console.log('Hello UserVerificationProvider Provider');
  }

  userEmailVerification(user_email:any, userRole:string){
    let headers = new Headers();
    headers.append('Accept', 'application/json');

    let options = new RequestOptions({headers:headers});

    // data to be send 
    let data = JSON.stringify({ 
        useremail: user_email,
        userRole:userRole
    }); 

    return this.http.post('http://localhost/newCodeIgniter/api/rest/', data, options).map(res => res.json());
     //return this.http.get('http://localhost/newCodeIgniter/api/rest?username='+user_email).map(res => res.json());
  }

// function for the candiate profile add the information on the candiadate
  candidateFresherJob(employee_name:string,employee_email:any, employee_tel:string, employee_city:string, employee_state:string, employee_country:string, employee_first:string, employee_second:string){
    let headers = new Headers();

    headers.append('Accept','application/json');

    let options = new RequestOptions({headers:headers});
    let data = JSON.stringify({
        employee_name   : employee_name,
        employee_email  : employee_email,
        employee_tel    : employee_tel,
        employee_city   : employee_city,
        employee_state  : employee_state,
        employee_country : employee_country,
        employee_first   : employee_first,
        employee_second  : employee_second
    });

    return this.http.post('http://localhost/newCodeIgniter/candidate/', data, options).map(res => res.json());
  }

  // function for the employer hire the camndidae foe the job 
  employerHireJob(employer_name:string, employer_email:any, employer_tel:number, employer_city:string, employer_state:string, employer_country:string, employer_company:string, employer_adress:string, employer_website:string ){
  let headers = new Headers();

  headers.append('Accept','application/json');

  let options = new RequestOptions({headers:headers});
  
  // data convert into json
  let data = JSON.stringify({
      employer_name   : employer_name,
      employer_email  : employer_email,
      employer_tel    : employer_tel,
      employer_city   : employer_city,
      employer_state  : employer_state,
      employer_country  : employer_country,
      employer_company  : employer_company,
      employer_address   : employer_adress,
      employer_website  : employer_website
    });

    

  return this.http.post('http://localhost/newCodeIgniter/employer/', data, options).map(res => res.json());
  }



  


  
  
  
}
