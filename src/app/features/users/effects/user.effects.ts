import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError, tap } from 'rxjs/operators';
import { APIService, NOWToken } from './../../services';
import { UsersAPIActions, UsersPageActions } from './../actions';
import { User } from './../models/user';

@Injectable({ providedIn: 'root' })

export class UserEffects {

    //private userName = NOWUserName();
    private uri = '/api/now/table/sys_user';
    private query = 'sysparm_query=nameSTARTSWITH{{userName}}';
    private limit = 'sysparm_limit=40';
    private fields = 'sysparm_fields=';

    getUsers$ = createEffect(() => this.actions$.pipe(
        ofType(UsersAPIActions.SearchUsers),
        map((payload: any) => `${this.uri}?${this.query.replace('{{userName}}', payload.term)}&${this.limit}`),
        mergeMap((url: string) => this.service.get(url).pipe(
            map((data: User[]) => UsersPageActions.AddUsers({ models: data })),
            catchError(() => EMPTY))
        )));

    constructor(private actions$: Actions, private service: APIService) { }
}
