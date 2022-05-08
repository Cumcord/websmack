export default () => {
  debugger
  const key = Object.keys(window).find((key) =>
    key.includes("Jsonp")
  );

  const wjp =
    typeof window[key] === "function"
      ? window[key]
      : (...args) => window[key].push(args);

  let modules = wjp(
    [Symbol()],
    {
      get: (m, _, wpRequire) => (m.exports = wpRequire),
    },
    [["get"]]
  );
  
  delete modules.m.get;
  delete modules.c.get;
  return modules.c;
};