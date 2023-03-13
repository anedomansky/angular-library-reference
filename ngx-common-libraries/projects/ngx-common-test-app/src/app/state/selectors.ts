import { createFeatureSelector, createSelector } from '@ngrx/store';
import { UserState, USER_FEATURE_KEY } from './reducers';

export const selectUser = createFeatureSelector<UserState>(USER_FEATURE_KEY);

export const selectUserName = createSelector(selectUser, (user) => user.name);
