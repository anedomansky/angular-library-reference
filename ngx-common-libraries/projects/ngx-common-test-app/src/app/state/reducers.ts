import { createFeature, createReducer } from '@ngrx/store';

export const USER_FEATURE_KEY = 'user';

export interface UserState {
  name: string;
}

export interface UserSlice {
  [USER_FEATURE_KEY]: UserState;
}

export const initialState: UserState = {
  name: 'Jane Doe',
};

export const userFeature = createFeature({
  name: USER_FEATURE_KEY,
  reducer: createReducer(initialState),
});
