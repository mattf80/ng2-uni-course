import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header.component';
import { WinesComponent } from './wines/wines.component';
import { WineListComponent } from './wines/wine-list/wine-list.component';
import { WineItemComponent } from './wines/wine-list/wine-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    WinesComponent,
    WineListComponent,
    WineItemComponent
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
