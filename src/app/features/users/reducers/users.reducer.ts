import { Action, createReducer, on } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { User } from './../models/user';
import { UsersAPIActions, UsersPageActions } from './../actions';

export const adapter: EntityAdapter<User> = createEntityAdapter<User>({
    selectId: (user) => user.sys_id
});

export interface State extends EntityState<User> {
    activeId: number | null;
}

export const initialState: State = adapter.getInitialState({
    activeId: null,
});

const defaultReducer = createReducer(initialState,
    on(UsersPageActions.AddUsers, (state, { models }) => adapter.addAll(models, { ...state, selectedId: null }))
);

export function reducer(state: State | undefined, action: Action) {
    return defaultReducer(state, action);
}