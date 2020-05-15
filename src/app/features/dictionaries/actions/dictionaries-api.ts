import { createAction, props } from '@ngrx/store';

export const SearchDictionaries = createAction('[Dictionaries API] Search', props<{ table: string }>());