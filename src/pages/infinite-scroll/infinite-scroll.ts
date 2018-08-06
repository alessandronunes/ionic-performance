import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import "rxjs/add/operator/map";

@Component({
  selector: 'page-infinite-scroll',
  templateUrl: 'infinite-scroll.html',
})
export class InfiniteScrollPage {

  users = [];
  page = 0;
  maximumPages = 30;

  constructor(public navCtrl: NavController, private httpClient: HttpClient) {
    this.loadUsers();
  }

  loadUsers(infiniteScroll?) {
    this.httpClient.get('https://randomuser.me/api/?results=10&page=${this.page}')
    .subscribe(res => {
      this.users = this.users.concat(res['results']);
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