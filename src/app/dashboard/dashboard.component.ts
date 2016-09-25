import {Component,OnInit} from '@angular/core';
import { Router } from '@angular/router';

import {Hero} from '../hero';
import {HeroService} from '../hero.service';

@Component({
    selector: 'dashboard',
    template: require('./dashboard.component.html')
})
export class DashboardComponent implements OnInit {
    heroes: Hero[];

    constructor(
        private heroService: HeroService,
        private router: Router) {
    }

    ngOnInit(): void {
        this.getTopHeroes();
    }
    
    getTopHeroes(): void {
        this.heroService.getTopHeroes()
            .then(heroes => this.heroes = heroes)
    }

    gotoDetail(hero: Hero): void {
        let link = ['/hero-details', hero.id];
        this.router.navigate(link);
    }
}

