import { Injectable } from '@angular/core';
import { PreloadingStrategy, Route } from '@angular/router';
import { Observable, of } from 'rxjs';

@Injectable()

export class PreloadSelectedModules implements PreloadingStrategy {

    preloadedModules: string[] = [];

    preload(route: Route, load: any): Observable<any> {
        // tslint:disable-next-line:no-string-literal
        return route.data && route.data['preload'] ? this.addRoute(route, load) : of(null);
    }

    addRoute(route: Route, load: any) {
        this.preloadedModules.push(route.path);     // add the route path to our preloaded module array
        console.log('Preloaded: ' + route.path);    // log the route path to the console
        return load();
    }

}
