export default () => {
  const key = Object.keys(window).find((key) =>
    key.startsWith("parcelRequire")
  );

  return window[key].cache;
};
