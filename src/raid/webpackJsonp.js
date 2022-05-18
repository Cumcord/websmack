export default () => {
  const key = Object.keys(window).find((key) =>
    key.includes("Jsonp")
  );

  const wjp =
    typeof window[key] === "function"
      ? window[key]
      : (...args) => window[key].push(args);

  let wpRequire;
   wjp(
    [Symbol()],
    {
      get: (_m, _, wpRq) => (wpRequire = wpRq),
    },
    [["get"]]
  );
  
  delete wpRequire.m.get;
  delete wpRequire.c.get;
  return wpRequire.c;
};