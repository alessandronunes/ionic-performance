import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { NavController } from 'ionic-angular';
import { DataProvider } from '../../providers/data/data';
import 'rxjs/add/operator/debounceTime';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {

  searchTerm: string = '';
  searchControl: FormControl;
  items: any;
  searching: any = false;

  constructor(public navCtrl: NavController, public dataService: DataProvider) {
     this.searchControl = new FormControl();
  }

  ionViewDidLoad() {

    this.setFilteredItems();
 
    this.searchControl.valueChanges.debounceTime(700).subscribe(search => {

        this.searching = false;
        this.setFilteredItems();

    });

  }
 
  onSearchInput(){
      this.searching = true;
  }

  setFilteredItems() {

      this.items = this.dataService.filterItems(this.searchTerm);

  }

  itemTapped(event, item) {
    // That's right, we're pushing to ourselves!
    this.navCtrl.push(ListPage, {
      item: item
    });
  }
}
