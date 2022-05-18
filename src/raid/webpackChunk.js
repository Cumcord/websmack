export default () => {
  const key = Object.keys(window).find((key) => key.startsWith("webpackChunk"));
  let wpRequire;

  window[key].push([
    [Symbol()],
    {},
    (e) => {
      wpRequire = e;
    },
  ]);

  window[key].pop();

  if (wpRequire.c) return wpRequire.c;

  // wow thats jank
  return Object.fromEntries(
    Object.entries(wpRequire.m).map(([k, v]) => [
      k,
      { id: k, loaded: true, exports: wpRequire(k) },
    ])
  );
};
