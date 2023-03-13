import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ErrorState, ERROR_FEATURE_KEY } from './reducers';

export const selectError = createFeatureSelector<ErrorState>(ERROR_FEATURE_KEY);

export const selectErrorCode = createSelector(
  selectError,
  (error) => error.code
);

export const selectErrorDescription = createSelector(
  selectError,
  (error) => error.description
);
