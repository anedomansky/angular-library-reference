import { CounterAPI } from './ports/api/counter';
import { CounterAdapterSPI } from './ports/spi/counter-adapter';

export class Counter implements CounterAPI {
  private counterAdapter: CounterAdapterSPI;
  private count: number;

  constructor(counterAdapter: CounterAdapterSPI) {
    this.counterAdapter = counterAdapter;
    this.count = 0;
  }

  getCount(): number {
    return this.count;
  }

  increment(count: number): number {
    this.count = this.counterAdapter.increment(count);
    return this.count;
  }
  reset(): number {
    return this.counterAdapter.reset();
  }
}
