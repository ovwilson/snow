import { Injectable } from '@angular/core';
import {
    HttpEvent, HttpInterceptor, HttpHandler, HttpRequest
} from '@angular/common/http';

import { Observable, of, onErrorResumeNext } from 'rxjs';
import { tap, map, mergeMap } from 'rxjs/operators';

/** Pass untouched request through to the next request handler. */
@Injectable()


export class NoopInterceptor implements HttpInterceptor {

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const started = new Date(Date.now()).toLocaleString();
        return of(null).pipe(
            mergeMap(() => (window as any).location.hostname === 'localhost' ? this.local(req, next, started) :
                this.server(req, next, started)));
    }

    local(req: HttpRequest<any>, next: HttpHandler, started: string): Observable<HttpEvent<any>> {
        console.log(`Local Server Request: ${(window as any).location.origin}`, req.url);
        return of(req).pipe(
            map(req => this.clone(req, { url: `http://localhost:3000${req.url}` })),
            tap(req => console.log('req', req)),
            mergeMap(req => next.handle(req)),
            tap(() => this.log(req, started)));
    }

    server(req: HttpRequest<any>, next: HttpHandler, started: string): Observable<HttpEvent<any>> {
        return next.handle(req).pipe(
            tap(() => this.log(req, started)));
    }

    clone(req: HttpRequest<any>, params: any) {
        return req.clone(params);
    }

    log(req: HttpRequest<any>, started: string) {
        const ended = new Date(Date.now()).toLocaleString();
        console.log(`HttpInterceptor at started at ${started}, ending at ${ended}`, req);
    }
}
