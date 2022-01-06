export default () => {
  let modules = webpackJsonp.push([
    [],
    {
      get: (m, _, wpRequire) => (m.exports = wpRequire),
    },
    [["get"]],
  ]);
  delete modules.m.get;
  delete modules.c.get;
  return modules.c;
};
