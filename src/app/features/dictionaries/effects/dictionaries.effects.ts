import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError, tap } from 'rxjs/operators';
import { APIService, NOWToken } from '../../services';
import { DictionariesAPIActions, DictionariesPageActions } from '../actions';
import { Dictionary } from './../models/dictionary';

@Injectable({ providedIn: 'root' })

export class DictionariesEffects {

    private uri = '/api/now/table/sys_dictionary';
    private query = 'sysparm_query=name={{table}}^elementISNOTEMPTY';
    private limit = 'sysparm_limit=100';
    private fields = 'sysparm_fields=element,column_label,name,active,sys_name,sys_id,read_only,read_roles,write_roles,delete_roles';
    //https://dev57615.service-now.com/sys_dictionary_list.do?sysparm_query=nameSTARTSWITH
    
    //x_398178_award_fee_props&sysparm_view=

    search$ = createEffect(() => this.actions$.pipe(
        ofType(DictionariesAPIActions.SearchDictionaries),
        map((payload: any) => `${this.uri}?${this.query.replace('{{table}}', payload.table)}&${this.limit}&${this.fields}`),
        mergeMap((url: string) => this.service.get(url).pipe(
            map((data: Dictionary[]) => DictionariesPageActions.AddDictionaries({ models: data })),
            catchError(() => EMPTY))
        )));

    constructor(private actions$: Actions, private service: APIService) { }
}
