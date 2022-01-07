import webpackJsonp from "./webpackJsonp";
import webpackChunk from "./webpackChunk";
import loaded_chunks from "./loaded_chunks";
import parcelRequire from "./parcelRequire"
import recursive_vscode from "./recursive_vscode"

const matchKey = 
    (key) =>
        Object.keys(window).find((k) => key.startsWith(key));

export default () => {
    if (matchKey("webpackJsonp"))
        return webpackJsonp();
    
    if (matchKey("webpackChunk"))
        return webpackChunk();
    
    if (matchKey("__LOADABLE_LOADED_CHUNKS__"))
        return loaded_chunks();
    
    if (matchKey("parcelRequire"))
        return parcelRequire();
    
    if (matchKey("module") && window.module.children)
        return recursive_vscode();
    
    throw new Error("Could not match any module fetching method.")
}