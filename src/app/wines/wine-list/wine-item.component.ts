
import { Component, OnInit, Input } from '@angular/core';
import { Wine } from './../wine';

@Component({
  selector: 'app-wine-item',
  templateUrl: './wine-item.component.html',
  styleUrls: ['./wine-item.component.css']
})
export class WineItemComponent implements OnInit {
  
  @Input()
  wine: Wine;
  wineId: number;

  constructor() { }

  ngOnInit() {
  }

}
