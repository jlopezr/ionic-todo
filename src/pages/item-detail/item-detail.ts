import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {Data} from "../../providers/data/data";

/**
 * Generated class for the ItemDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-item-detail',
  templateUrl: 'item-detail.html',
})
export class ItemDetailPage {

  title: string;
  description: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public dataService: Data) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ItemDetailPage');

    this.title = this.navParams.get('item').title;
    this.description = this.navParams.get('item').description;
  }

  removeItem() {
    console.log('Remove item: '+this.title);
    this.dataService.remove(this.title);
  }

}
