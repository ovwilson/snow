import { ActionReducer, ActionReducerMap, createFeatureSelector, createSelector, MetaReducer } from '@ngrx/store';
import { fromUsers, fromDictionaries } from './features';

export interface AppState {
  users: fromUsers.State;
  dictionaries: fromDictionaries.State;
}

export const reducers: ActionReducerMap<any> = {
  users: fromUsers.reducer,
  dictionaries: fromDictionaries.reducer
};