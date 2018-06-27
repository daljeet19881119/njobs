
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

  userEmailVerification(user_email:string,userRole:string){
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


  


  
  
  
}
