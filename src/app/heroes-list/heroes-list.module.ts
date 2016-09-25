import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import {HeroesListComponent} from './heroes-list.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{ path: '', component: HeroesListComponent }])
    ],
    declarations: [
        HeroesListComponent
    ],
    exports: [
        HeroesListComponent
    ]
})
export class HeroesListModule {

}