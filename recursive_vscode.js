export default () => {
  const modules = [];

  const getModulesRec = (mod) => {
    modules.push(mod);
    mod.children.forEach(getModulesRec);
  };

  getModulesRec(window.module);

  return modules;
};
