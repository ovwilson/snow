import { ActionReducer, ActionReducerMap, createFeatureSelector, createSelector, MetaReducer } from '@ngrx/store';
import { fromUsers } from './features';

export interface AppState {
  users: fromUsers.State;
}

export const reducers: ActionReducerMap<any> = {
  users:  fromUsers.reducer
};