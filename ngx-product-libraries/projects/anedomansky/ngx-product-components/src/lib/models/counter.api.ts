import { InjectionToken } from '@angular/core';
import { CounterAPI } from '@anedomansky/domain';

export const COUNTER_API = new InjectionToken<CounterAPI>('CounterApi');
