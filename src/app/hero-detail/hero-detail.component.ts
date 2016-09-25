import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
    selector: 'hero-detail',
    template: require('./hero-detail.component.html')
})
export class HeroDetailComponent implements OnInit {
    
    @Input()
    hero: Hero;

    private _heroId: number;

    constructor(
        private heroService: HeroService,
        private route: ActivatedRoute) {
    }

    ngOnInit(): void {
        this.getHeroFromRouteId();
    }

    getHeroFromRouteId(): void {
        this.route.params.forEach((params: Params) => {
            this._heroId = Number(params['id']);
            this.heroService.getHero(this._heroId)
                .then(hero => this.hero = hero);
        });
    }

    goBack(): void {
        window.history.back();
    }
}