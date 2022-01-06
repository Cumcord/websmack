export default () => {
  let modules;
  const sym = Symbol();

  webpackChunkdiscord_app.push([
    [sym],
    {},
    (e) => {
      modules = e;
    },
  ]);

  webpackChunkdiscord_app.pop();

  return modules.c;
};
