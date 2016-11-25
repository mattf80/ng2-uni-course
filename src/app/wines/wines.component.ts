import { Component, OnInit } from '@angular/core';
import { Wine } from './wine';

@Component({
  selector: 'app-wines',
  templateUrl: './wines.component.html'
})
export class WinesComponent implements OnInit {
  selectedWine: Wine;

  constructor() { }

  ngOnInit() {
  }

}
