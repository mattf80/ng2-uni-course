import { WineService } from './../wine.service';
import { CellarService } from './../../cellar/cellar.service';
import { Wine } from './../wine';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Subscription } from 'rxjs/Rx';

@Component({
  selector: 'app-wine-detail',
  templateUrl: './wine-detail.component.html',
  styleUrls: ['./wine-detail.component.css']
})
export class WineDetailComponent implements OnInit, OnDestroy {
  private subscription: Subscription;
  private wineIndex: number;
  selectedWine: Wine;
  
  
  constructor(private cellarService: CellarService, 
              private route: ActivatedRoute,
              private wineService: WineService,
              private router: Router) { }

  ngOnInit() {
    this.subscription = this.route.params.subscribe(
      (params: any) => {
        this.wineIndex = params['id'];
        this.selectedWine = this.wineService.getWine(this.wineIndex);
      }
    );
  }

  onEdit() {
    this.router.navigate(['/wines', this.wineIndex, 'edit']);
  }

  onDelete() {
    this.wineService.deleteWine(this.selectedWine);
    this.router.navigate(['/wines']);
  }

  onAddToCellar(){
    this.cellarService.addItems(this.selectedWine)

  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
