import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import 'rxjs/add/operator/map';



/**
 * Generated class for the HelloIonicPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-hello-ionic',
  templateUrl: 'hello-ionic.html',
})
export class HelloIonicPage {

//   items: Array<{title: string, note: string}>;
  
  constructor(public navCtrl: NavController ) 
  {        
    //  this.http.get('http://qa.genserv.co/api/contractors/')
    // .map(res => 
    // res.json()).subscribe(data => 
    // {
    //     console.log(data[0].book);
    //     this.items = [];
    //     for(let i = 0; i < 66; i++) 
    //     {
    //       this.items.push({
    //         title: data[i].book,
    //         note: data[i].abbrev
    //       });
    //     }
    // });
  }
  
//  itemSelected(event, item) 
//  {
//     this.navCtrl.push(ItemDetailsPage, {item: item});
//  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HelloIonicPage');
  }

}
