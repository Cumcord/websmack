const get = (chunkName) => {
  let modules;
  const sym = Symbol();

  window[`webpackChunk${chunkName}`].push([
    [sym],
    {},
    (e) => {
      modules = e;
    },
  ]);

  window[`webpackChunk${chunkName}`].pop();

  return modules.c ?? modules.m /* telegram */;
};

export default get;

export const discord = () => get("discord_app");
export const telegram = () => get("telegram_t");
