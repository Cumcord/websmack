export default () => {
  const modules = {};

  const randomId = Math.random().toString(36);
  const randomIdTwo = Math.random().toString(36);

  __LOADABLE_LOADED_CHUNKS__.push([
    [randomId],
    {
      [randomIdTwo](_, _2, { c }) {
        for (const mod in c) {
          modules[mod] = c[mod].exports;
        }
      },
    },
    [[randomIdTwo]],
  ]);

  return modules;
};