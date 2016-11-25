import { Wine } from './../wine';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-wine-list',
  templateUrl: './wine-list.component.html'
})
export class WineListComponent implements OnInit {
<<<<<<< HEAD
  wines: Wine[] = [
    new Wine('Latour', 'French plonk', 'http://www.hotel-r.net/im/hotel/fr/ch%C3%A2teau-latour.png', []),
    new Wine('Margaux', '1st Growth', 'http://www.hotel-r.net/im/hotel/fr/ch%C3%A2teau-latour.png', [])
  ];
=======
  wines: Wine[] = [];
  @Output() wineSelected = new EventEmitter<Wine>();
  wine = new Wine('Latour', 'French plonk', 'http://www.hotel-r.net/im/hotel/fr/ch%C3%A2teau-latour.png')
>>>>>>> a6f3f3650f67e552a6617ad553e8485d99b6cc65

  constructor() { }

  ngOnInit() {
  }

  onSelected(wine: Wine){
    this.wineSelected.emit(wine);
  }

}
