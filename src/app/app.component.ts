import {Component} from '@angular/core';

@Component({
    selector: 'app-component',
    template: require('./app.html')
})
export class AppComponent {
    title: string = 'Tour of heroes';
}

