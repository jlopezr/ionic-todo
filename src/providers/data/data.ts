import {Injectable} from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable()
export class Data {

  constructor(public storage: Storage) {
    console.log('Hello Data Provider');
  }

  getData() {
    return this.storage.get('todos');
  }

  save(data) {
    this.storage.set('todos', data);
  }

  remove(item) {
    this.getData().then((data)=> {
      if(data) {
        let i = data.findIndex((x) => {x.title === item} );
        console.log("Found at position "+i);
        if(i>=0) {
          data.splice(i,1);
          this.storage.set('todos', data);
        }
      }
    });

  }

}
