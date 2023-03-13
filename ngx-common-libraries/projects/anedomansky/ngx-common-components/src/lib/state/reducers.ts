import { createFeature, createReducer } from '@ngrx/store';

export const ERROR_FEATURE_KEY = 'error';

export interface ErrorState {
  code: number;
  description: string;
}

export interface ErrorSlice {
  [ERROR_FEATURE_KEY]: ErrorState;
}

export const initialState: ErrorState = {
  code: 404,
  description: 'Not Found',
};

export const errorFeature = createFeature({
  name: ERROR_FEATURE_KEY,
  reducer: createReducer(initialState),
});
