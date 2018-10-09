import {Component} from '@angular/core';
import {ModalController, NavController} from 'ionic-angular';
import {AddItemPage} from "../add-item/add-item";
import {ItemDetailPage} from "../item-detail/item-detail";
import {Data} from "../../providers/data/data";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public items = [];

  constructor(public navCtrl: NavController, public modalCtrl: ModalController, public dataService: Data) {
    this.dataService.getData().then((todos)=> {
      if(todos) {
        this.items = todos;
      }
    });
  }

  ionViewDidLoad() {
    /*this.items = [
      {title:'hi1', description:'test 1'},
      {title:'hi2', description:'test 2'},
      {title:'hi3', description:'test 3'}
    ];
    */
  }

  addItem() {
    console.log("addItem()");

    let addModal = this.modalCtrl.create(AddItemPage);

    addModal.onDidDismiss((item) => {
      console.log("Saving "+item);
      if (item) {
        this.saveItem(item);
      }
    });

    addModal.present();
  }

  saveItem(item) {
    this.items.push(item);
    this.dataService.save(this.items);
  }

  viewItem(item) {
    this.navCtrl.push(ItemDetailPage, {
      item: item
    });
  }

}
