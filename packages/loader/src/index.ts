import { CounterAdapter } from '@anedomansky/adapters';
import { Counter, CounterAPI } from '@anedomansky/domain';

export namespace AppLoader {
  const counterAdapter = new CounterAdapter();

  const counter = new Counter(counterAdapter);

  export function getCounterInstance(): CounterAPI {
    return counter;
  }
}
