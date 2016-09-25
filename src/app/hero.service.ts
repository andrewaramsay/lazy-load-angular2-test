import {Injectable} from '@angular/core';
import {Http} from '@angular/http';

import 'rxjs/add/operator/toPromise';

import {Hero} from './hero';

@Injectable()
export class HeroService {
    constructor(
        private http: Http) {
    }
    
    getHeroes(): Promise<Hero[]> {
        return this.http.get('app/heroes')
            .toPromise()
            .then(response => response.json().data as Hero[])
            .catch(this.handleError);
    }

    getTopHeroes(): Promise<Hero[]> {
        return this.getHeroes()
            .then(heroes => heroes.slice(1,5));
    }

    getHero(heroId: number): Promise<Hero> {
        return this.getHeroes()
            .then(heroes => heroes.find(hero => hero.id === heroId));
    }

    handleError(error: Error): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}