import { createAction, props } from '@ngrx/store';
import { User } from './../models/user';

export const Enter = createAction('[Users Page] Enter');
export const AddUsers = createAction('[Users Page] Add Users', props<{ models: User[] }>());