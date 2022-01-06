export default () => {
  const wjp =
    typeof webpackJsonp === "function"
      ? webpackJsonp
      : (...args) => webpackJsonp.push(args);

  let modules = wjp(
    [],
    {
      get: (m, _, wpRequire) => (m.exports = wpRequire),
    },
    [["get"]]
  );
  delete modules.m.get;
  delete modules.c.get;
  return modules.c;
};
