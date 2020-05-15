import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError, tap } from 'rxjs/operators';
import { APIService, NOWToken } from './../../services';
import { UsersAPIActions, UsersPageActions } from './../actions';
import { User, UserRole } from './../models/user';

@Injectable({ providedIn: 'root' })

export class UserEffects {

    //private userName = NOWUserName();
    private uri = '/api/now/table/sys_user';
    private query = 'sysparm_query=nameSTARTSWITH{{userName}}';
    private limit = 'sysparm_limit=40';
    private fields = 'sysparm_fields=sys_id,first_name,last_name,middle_name,username,name,email';

    private roles_uri = '/api/x_398178_award_fee/awards/roles';

    getUsers$ = createEffect(() => this.actions$.pipe(
        ofType(UsersAPIActions.SearchUsers),
        map((payload: any) => `${this.uri}?${this.query.replace('{{userName}}', payload.term)}&${this.limit}&${this.fields}`),
        mergeMap((url: string) => this.service.get(url).pipe(
            map((data: User[]) => UsersPageActions.AddUsers({ models: data })),
            catchError(() => EMPTY))
        )));

    getRoles$ = createEffect(() => this.actions$.pipe(
        ofType(UsersAPIActions.FindUserRoles),
        map((payload: any) => this.roles_uri),
        mergeMap((url: string) => this.service.get(url).pipe(
            map((data: UserRole) => UsersPageActions.AddUserRoles({ model: data })),
            catchError(() => EMPTY))
        )));

    constructor(private actions$: Actions, private service: APIService) { }
}
