import { WineService } from './../wine.service';
import { Wine } from './../wine';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wine-list',
  templateUrl: './wine-list.component.html'
})
export class WineListComponent implements OnInit {
  wines: Wine[] = [];


  constructor(private wineService: WineService) { }

  ngOnInit() {
    this.wines = this.wineService.getWines();
  }



}
