import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./features/home/home').then((r) => r.Home),
        pathMatch: 'full'
    },
    {
        path: 'about',
        loadComponent: () => import('./features/about/about').then((r) => r.About)
    }
];
