import { createAction, props } from '@ngrx/store';
import { User, UserRole } from './../models/user';

export const Enter = createAction('[Users Page] Enter');

export const AddUsers = createAction('[Users API] Add Users', props<{ models: User[] }>());
export const AddUserRoles = createAction('[Users API] Add User Roles', props<{ model: UserRole }>());

