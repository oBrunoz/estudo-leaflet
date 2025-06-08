import { Routes } from '@angular/router';
import { Map } from './pages/map/map';
import { Home } from './pages/home/home';

export const routes: Routes = [
    { path: '', component: Home },
    { path: 'map', component: Map }
];
