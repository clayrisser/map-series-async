export default async function mapSeriesAsync<V = any, R = V>(
  values: V[],
  iterator: (value: V, i?: number, length?: number) => Promise<R>
): Promise<R[]> {
  const result: R[] = [];
  await values.reduce(async (promise: Promise<void>, value: V, i: number) => {
    await promise;
    result.push(await iterator(value, i, values.length));
  }, Promise.resolve());
  return result;
}
