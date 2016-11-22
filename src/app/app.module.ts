import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header.component';
import { WinesComponent } from './wines/wines.component';
import { WineListComponent } from './wines/wine-list/wine-list.component';
import { WineItemComponent } from './wines/wine-list/wine-item.component';
import { WineDetailComponent } from './wines/wine-detail/wine-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    WinesComponent,
    WineListComponent,
    WineItemComponent,
    WineDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
