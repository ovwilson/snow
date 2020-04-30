import { Action, createReducer, on, createSelector, createFeatureSelector } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { adapter, State } from './users.reducer';

const { selectIds, selectEntities, selectAll, selectTotal } = adapter.getSelectors();
export const selectUserState = createFeatureSelector<State>('users');
export const selectUsers = createSelector(selectUserState, selectAll);
export const selectUserEntities = createSelector(selectUserState, selectEntities);
export const selectActiveId = createSelector(selectUserState, (state) => state.activeId);
export const selectActiveUser = createSelector(selectEntities, selectActiveId, (entities,id) => entities[id] || null);