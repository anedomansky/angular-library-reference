import { EnvironmentProviders } from '@angular/core';
import { provideState } from '@ngrx/store';
import { combineEnvironmentProviders } from './combine-environment-providers';
import { errorFeature } from './reducers';

export function provideError(): EnvironmentProviders {
  return combineEnvironmentProviders([provideState(errorFeature)]);
}
