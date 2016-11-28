import { Grape } from './../shared/grape';
import { Wine } from './wine';
import { Injectable } from '@angular/core';

@Injectable()
export class WineService {
  
  wines: Wine[] = [
    new Wine('Latour', 'French plonk', 'http://www.hotel-r.net/im/hotel/fr/ch%C3%A2teau-latour.png', [
      new Grape('Cabernet', 80),
      new Grape('Merlot', 20)
    ]),
    new Wine('Margaux', '1st Growth', 'http://sr1.wine-searcher.net/images/labels/38/03/chateau-margaux-margaux-france-10193803.jpg', [
            new Grape('Cabernet', 50),
      new Grape('Merlot', 50)
    ])
  ];

  constructor() { }

  getWines() {
    return this.wines;
  }

  getWine(id:number) {
    return this.wines[id];
  }

  deleteWine(wine: Wine) {
    this.wines.splice(this.wines.indexOf(wine), 1);
  }

}
