
import { Component, Input } from '@angular/core';
import { Wine } from './../wine';

@Component({
  selector: 'app-wine-item',
  templateUrl: './wine-item.component.html',
  styleUrls: ['./wine-item.component.css']
})
export class WineItemComponent {
  
  @Input() wine: Wine;
  @Input() wineId: number;


}
