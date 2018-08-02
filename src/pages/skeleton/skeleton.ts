import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import "rxjs/add/operator/map";

@Component({
 selector: 'page-skeleton',
 templateUrl: 'skeleton.html'
})
export class SkeletonPage {

 users = [];
 page = 0;
 maximumPages = 30;

 constructor(public navCtrl: NavController, private httpClient: HttpClient) {
   this.loadUsers();
 }

 checkPlatform(){
   
 }

 loadUsers(infiniteScroll?) {
   this.httpClient.get(`https://randomuser.me/api/?results=3&page=${this.page}`)
   .subscribe(res => {
     this.users = this.users.concat(res['results']);
     document.getElementById('skeleton').style.display = 'none';
     if (infiniteScroll) {
       infiniteScroll.complete();
     }
   })
 }

 loadMore(infiniteScroll) {
   this.page++;
   this.loadUsers(infiniteScroll);

   if (this.page === this.maximumPages) {
     infiniteScroll.enable(false);
   }
 }
}