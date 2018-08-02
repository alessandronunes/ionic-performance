import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import "rxjs/add/operator/map";

@Component({
 selector: 'page-virtualscroll',
 templateUrl: 'virtualscroll.html'
})
export class VirtualscrollPage {

 users = [];

 constructor(public navCtrl: NavController, private httpClient: HttpClient) {
   this.httpClient.get(`https://randomuser.me/api/?results=100`)
   .subscribe(res => {
     this.users = this.users.concat(res['results']);
     document.getElementById('skeleton').style.display = 'none';
   })
 }
}