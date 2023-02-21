export type CounterAdapterSPI = {
  increment(count: number): number;
  reset(): number;
};
