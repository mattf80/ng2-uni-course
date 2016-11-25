import { Wine } from './../wine';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-wine-detail',
  templateUrl: './wine-detail.component.html'
})
export class WineDetailComponent implements OnInit {

  @Input() selectedWine: Wine;
  
  constructor() { }

  ngOnInit() {
  }

}
