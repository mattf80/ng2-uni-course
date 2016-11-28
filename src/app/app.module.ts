import { routing } from './app.routing';


import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { WineService } from './wines/wine.service';
import { CellarService } from './cellar/cellar.service';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header.component';
import { WinesComponent } from './wines/wines.component';
import { WineListComponent } from './wines/wine-list/wine-list.component';
import { WineItemComponent } from './wines/wine-list/wine-item.component';
import { WineDetailComponent } from './wines/wine-detail/wine-detail.component';
import { CellarComponent } from './cellar/cellar.component';
import { CellarItemAddComponent } from './cellar/cellar-item-add/cellar-item-add.component';
import { DropdownDirective } from './dropdown.directive';
import { WineEditComponent } from './wine-edit/wine-edit.component';
import { WineStartComponent } from './wines/wine-start.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    WinesComponent,
    WineListComponent,
    WineItemComponent,
    WineDetailComponent,
    CellarComponent,
    CellarItemAddComponent,
    DropdownDirective,
    WineEditComponent,
    WineStartComponent
  ],
  imports: [
    BrowserModule,
    routing,
    FormsModule,
    HttpModule
  ],
  providers: [WineService, CellarService],
  bootstrap: [AppComponent]
})
export class AppModule { }
