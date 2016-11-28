
import { Routes } from '@angular/router';

import { WineDetailComponent } from './wine-detail/wine-detail.component';
import { WineStartComponent } from './wine-start.component';
import { WineEditComponent } from './../wine-edit/wine-edit.component';

export const WINE_ROUTES: Routes = [
    { path: '', component: WineStartComponent },
    { path: 'new', component: WineEditComponent },
    { path: ':id', component: WineDetailComponent },
    { path: ':id/edit', component: WineEditComponent }
];
