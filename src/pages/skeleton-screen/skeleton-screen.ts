
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import "rxjs/add/operator/map";

@Component({
  selector: 'page-skeleton-screen',
  templateUrl: 'skeleton-screen.html',
})
export class SkeletonScreenPage {

  users = [];

  constructor(public navCtrl: NavController, private httpClient: HttpClient) {
    this.loadUsers();
  }

  loadUsers() {
    this.httpClient.get('https://randomuser.me/api/?results=10')
    .subscribe(res => {
      this.users = this.users.concat(res['results']);
    })
  }
}