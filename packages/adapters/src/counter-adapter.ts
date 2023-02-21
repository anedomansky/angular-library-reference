import { CounterAdapterSPI } from '@anedomansky/domain';

export class CounterAdapter implements CounterAdapterSPI {
  increment(count: number): number {
    const newCount = count + 1;
    return newCount;
  }
  reset(): number {
    return 0;
  }
}
