import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';

import {Hero} from '../hero';
import {HeroService} from '../hero.service';

@Component({
    selector: 'heroes-list',
    template: require('./heroes-list.component.html')
})
export class HeroesListComponent implements OnInit{
    
    title: string = 'Tour of heroes';
    selectedHero: Hero;
    heroes: Hero[];

    constructor(
        private heroService: HeroService,
        private router: Router) {
    }

    ngOnInit(): void {
        this.getHeroes();
    }

    getHeroes(): void {
        this.heroService.getHeroes()
            .then(heroes => this.heroes = heroes);
    }

    onSelect(hero: Hero): void {
        this.selectedHero = hero;
    }

    gotoDetails(hero: Hero): void {
        this.router.navigate(['/hero-details', hero.id]);
    }
}