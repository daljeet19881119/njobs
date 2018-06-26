
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
  user_email:string;

  constructor(public http: Http) {
    console.log('Hello UserVerificationProvider Provider');
  }

  userEmailVerification(user_email:string){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    let option = new RequestOptions({headers:headers});
    // data to be send 
    let data = JSON.stringify({ 
          username: user_email 
    }); 

    return this.http.post('http://localhost/ionic/postResponse.php',data,option).map(res => res.json());
  }
  

}
