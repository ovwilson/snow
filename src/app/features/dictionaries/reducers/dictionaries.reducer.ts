import { Action, createReducer, on } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Dictionary } from '../models/dictionary';
import { DictionariesAPIActions, DictionariesPageActions } from '../actions';

export const adapter: EntityAdapter<Dictionary> = createEntityAdapter<Dictionary>({
    selectId: (dictionary) => dictionary.sys_id
});

export interface State extends EntityState<Dictionary> {
    activeId: string | null;
}

export const initialState: State = adapter.getInitialState({
    activeId: null,
});

const defaultReducer = createReducer(initialState,
    on(DictionariesPageActions.AddDictionaries, (state, { models }) => adapter.addAll(models, { ...state, selectedId: null }))
);

export function reducer(state: State | undefined, action: Action) {
    return defaultReducer(state, action);
}