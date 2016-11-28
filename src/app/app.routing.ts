
import  { Routes, RouterModule } from '@angular/router';
import { WINE_ROUTES } from './wines/wines.routes';
import { WinesComponent } from './wines/wines.component';
import { CellarComponent } from './cellar/cellar.component';

const APP_ROUTES: Routes = [
    { path: '', redirectTo: '/wines', pathMatch: 'full' },
    { path: 'wines', component: WinesComponent, children: WINE_ROUTES },
    { path: 'cellar', component: CellarComponent }

];

export const routing = RouterModule.forRoot(APP_ROUTES);