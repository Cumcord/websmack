export default () => {
  const key = Object.keys(window).find((key) =>
    key.startsWith("webpackChunk")
  );
  let modules;

  window[key].push([
    [Symbol()],
    {},
    (e) => {
      modules = e;
    },
  ]);

  window[key].pop();

  return modules.c ?? modules.m /* telegram */;
};