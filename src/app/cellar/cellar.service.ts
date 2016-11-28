import { Wine } from './../wines/wine';

export class CellarService {
  private items: Wine[] = [];

  constructor() { }

  getItems() {
    return this.items;
  }

  addItems(item: Wine) {

    this.items.push(item);
    console.log(this.items);
    //Array.prototype.push.apply(this.items, item);

  }

}
