import webpackJsonp from "./webpackJsonp";
import webpackChunk from "./webpackChunk";
import loaded_chunks from "./loaded_chunks";
import parcelRequire from "./parcelRequire"
import recursive_vscode from "./recursive_vscode"

const matchKey = 
    (key) =>
        Object.keys(window).find((k) => k.includes(key));

const auto = () => {
    if (matchKey("Jsonp"))
        return ["jsonp", webpackJsonp()];
    
    if (matchKey("webpackChunk"))
        return ["chunk", webpackChunk()];
    
    if (matchKey("__LOADABLE_LOADED_CHUNKS__"))
        return ["loadable", loaded_chunks()];
    
    if (matchKey("parcelRequire"))
        return ["parcel", parcelRequire()];
    
    if (matchKey("module") && window.module.children)
        return ["vsc", recursive_vscode()];
    
    throw new Error("Could not match any module fetching method.")
}

export default auto;

export { auto, webpackJsonp, webpackChunk, loaded_chunks, parcelRequire, recursive_vscode };

window.auto = auto;