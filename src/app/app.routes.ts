import { Routes } from '@angular/router';
import { TariffListComponent } from './components/tariff-list/tariff-list.component';
import { TariffCompareComponent } from './components/tariff-compare/tariff-compare.component';

export const routes: Routes = [
    { path: '', component: TariffListComponent },
    { path: 'compare', component: TariffCompareComponent }
];
