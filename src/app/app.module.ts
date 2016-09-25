import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { HeroDetailModule } from './hero-detail/hero-detail.module';

import { InMemoryWebApiModule } from 'angular2-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

import {AppComponent} from './app.component';
import {HeroService} from './hero.service';
import {RoutingModule} from './routes/routes';

@NgModule({
    imports: [
        BrowserModule,
        RoutingModule,
        InMemoryWebApiModule.forRoot(InMemoryDataService),
        HttpModule,
        HeroDetailModule
    ],
    declarations: [
        AppComponent
    ],
    providers: [HeroService],
    bootstrap: [AppComponent]
})
export class AppModule {}