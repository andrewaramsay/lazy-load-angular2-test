import { ModuleWithProviders, Type } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {HeroDetailComponent} from '../hero-detail/hero-detail.component';

import { LazyHeroesListModule, LazyDashboardModule } from './lazy-modules';

const appRoutes: Routes = [
    {
        path: 'dashboard',
        loadChildren: LazyDashboardModule
    },
    {
        path: 'hero-details/:id',
        component: HeroDetailComponent
    },
    {
        path: 'heroes',
        loadChildren: LazyHeroesListModule
    },
    // {
    //     path: '',
    //     redirectTo: '/dashboard',
    //     pathMatch: 'full'
    // }
];



export const RoutingModule: ModuleWithProviders = RouterModule.forRoot(appRoutes);
