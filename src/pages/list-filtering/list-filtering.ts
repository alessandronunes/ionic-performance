import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { NavController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import "rxjs/add/operator/map";
import 'rxjs/add/operator/debounceTime';

@Component({
  selector: 'page-list-filtering',
  templateUrl: 'list-filtering.html',
})
export class ListFilteringPage {

  searchTerm: string = '';
  searchControl: FormControl;
  users: any = [];
  allUsers: any = [];
  searching: any = true;

  constructor(public navCtrl: NavController, private httpClient: HttpClient) {
      this.searchControl = new FormControl();
      this.httpClient.get('https://randomuser.me/api/?results=100')
      .subscribe(res => {
        this.allUsers = this.allUsers.concat(res['results']);
        this.users = JSON.parse(JSON.stringify(this.allUsers));
        this.searching = false;
      })
  }

  ionViewDidLoad() {
  
    this.searchControl.valueChanges.debounceTime(700).subscribe(search => {
        this.searching = false;
        this.setFilteredItems();
        console.log(this.users);
    });

  }
  
  onSearchInput(){
      this.searching = true;
  }

  setFilteredItems() {
    this.users = JSON.parse(JSON.stringify(this.allUsers));
    this.users = this.users.filter((item) => {

      return (item.name.first.toLowerCase().indexOf(this.searchTerm.toLowerCase()) > -1) ||
        (item.name.last.toLowerCase().indexOf(this.searchTerm.toLowerCase()) > -1) ||
        (item.email.toLowerCase().indexOf(this.searchTerm.toLowerCase()) > -1) ||
        this.searchTerm == '';

    });
    
  }
}
  