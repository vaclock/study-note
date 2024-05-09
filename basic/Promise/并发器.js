async function* asyncPool(concurrency, iterable, iteratorFn) {
    const executing = new Set();
    async function consume() {
      const [promise, value] = await Promise.race(executing);
      executing.delete(promise);
      return value;
    }
    for (const item of iterable) {
      // Wrap iteratorFn() in an async fn to ensure we get a promise.
      // Then expose such promise, so it's possible to later reference and
      // remove it from the executing pool.
      const promise = (async () => await iteratorFn(item, iterable))().then(
        value => [promise, value]
      );
      executing.add(promise);
      if (executing.size >= concurrency) {
        yield await consume();
      }
    }
    while (executing.size) {
      yield await consume();
    }
}
const timeout = ms => new Promise(resolve => setTimeout(() => resolve(ms), ms));

for await (const ms of asyncPool(2, [1000, 5000, 3000, 2000], timeout)) {
  console.log(ms);
}

module.exports = asyncPool;