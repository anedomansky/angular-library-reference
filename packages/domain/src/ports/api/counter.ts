export type CounterAPI = {
  getCount(): number;
  increment(count: number): number;
  reset(): number;
};
