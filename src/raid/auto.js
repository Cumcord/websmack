import webpackJsonp from "./webpackJsonp";
import webpackChunk from "./webpackChunk";
import loaded_chunks from "./loaded_chunks";
import parcelRequire from "./parcelRequire";
//import amdLoader from "./amdLoader";

export default (key) => {
  const jsonp = webpackJsonp(key);
  if (jsonp) return ["jsonp", jsonp];

  const chunk = webpackChunk(key);
  if (chunk) return ["chunk", chunk];

  const loadable = loaded_chunks(key);
  if (loadable) return ["loadable", loadable];

  const parcel = parcelRequire(key);
  if (parcel) return ["parcel", parcel];

  /*const amd = amdLoader(key);
  if (amd) return ["amd", amd];*/

  throw new Error("No module fetching methods succeeded.");
};