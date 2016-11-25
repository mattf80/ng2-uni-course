import { Wine } from './../wine';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wine-list',
  templateUrl: './wine-list.component.html'
})
export class WineListComponent implements OnInit {
  wines: Wine[] = [
    new Wine('Latour', 'French plonk', 'http://www.hotel-r.net/im/hotel/fr/ch%C3%A2teau-latour.png', []),
    new Wine('Margaux', '1st Growth', 'http://www.hotel-r.net/im/hotel/fr/ch%C3%A2teau-latour.png', [])
  ];

  constructor() { }

  ngOnInit() {
  }

}
