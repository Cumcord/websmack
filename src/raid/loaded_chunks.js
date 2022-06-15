export default (key = "_LOADABLE_LOADED_CHUNKS") => {
  if (!window[key]) return;

  const modules = {};

  const randomId = Math.random().toString(36);
  const randomIdTwo = Math.random().toString(36);

  window[key].push([
    [randomId],
    {
      [randomIdTwo](_, _2, { c }) {
        for (const mod in c) modules[mod] = c[mod].exports;
      },
    },
    [[randomIdTwo]],
  ]);

  return modules;
};