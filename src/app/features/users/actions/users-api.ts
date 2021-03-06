import { createAction, props } from '@ngrx/store';


export const SearchUsers = createAction('[Users API] Search', props<{ term: string }>());

export const FindUserRoles = createAction('[Users API] Find User Roles');