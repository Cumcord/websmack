const get = (name = "webpackJsonp") => {
  const wjp =
    typeof window[name] === "function"
      ? window[name]
      : (...args) => window[name].push(args);

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

export default get;

export const deezer = () => get("webpackJsonpDeezer");