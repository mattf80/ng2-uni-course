import { Wine } from './../wine';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-wine-list',
  templateUrl: './wine-list.component.html'
})
export class WineListComponent implements OnInit {
  wines: Wine[] = [];
  @Output() wineSelected = new EventEmitter<Wine>();
  wine = new Wine('Latour', 'French plonk', 'http://www.hotel-r.net/im/hotel/fr/ch%C3%A2teau-latour.png')

  constructor() { }

  ngOnInit() {
  }

  onSelected(wine: Wine){
    this.wineSelected.emit(wine);
  }

}
