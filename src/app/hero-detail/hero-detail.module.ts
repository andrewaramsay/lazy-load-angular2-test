import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


import {HeroDetailComponent} from './hero-detail.component';


@NgModule({
    imports: [
        CommonModule,
        FormsModule
    ],
    declarations: [
        HeroDetailComponent
    ],
    exports: [
        HeroDetailComponent
    ]
})
export class HeroDetailModule {
    
}