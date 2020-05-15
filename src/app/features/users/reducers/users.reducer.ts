import { Action, createReducer, on } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { User, UserRole } from './../models/user';
import { UsersAPIActions, UsersPageActions } from './../actions';

export const adapter: EntityAdapter<User> = createEntityAdapter<User>({
    selectId: (user) => user.sys_id
});

export interface State extends EntityState<User> {
    activeId: number | null;
    activeRoles: UserRole;
}

export const initialState: State = adapter.getInitialState({
    activeId: null,
    activeRoles: { roles: [], user_roles: [] }
});

const defaultReducer = createReducer(initialState,
    on(UsersPageActions.AddUsers, (state, { models }) => adapter.addAll(models, { ...state, selectedId: null })),
    on(UsersPageActions.AddUserRoles, (state, { model }) => ({ ...state, activeRoles: model }))
);

export function reducer(state: State | undefined, action: Action) {
    return defaultReducer(state, action);
}