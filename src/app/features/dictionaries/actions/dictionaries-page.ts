import { createAction, props } from '@ngrx/store';
import { Dictionary } from '../models/dictionary';

export const Enter = createAction('[Dictionaries Page] Enter');
export const AddDictionaries = createAction('[Dictionaries Page] Add Dictionary', props<{ models: Dictionary[] }>());