# Module Grabbers

Webpack? Yeah no web-unpack.

See CONTRIBUTING.md pls thx

## `webpackJsonp` array

`webpackJsonp` is an array, works on:

- Slack
- Twitter
  - Tweetdeck

## `webpackJsonp` func

`webpackJsonp` is a function, works on:

- MS Teams (does not work on the rest of Office 365!)

## Loaded chunks
Used by some sites with this one React code splitting lib, works on:
 - Reddit

## Discord:

`webpackChunkdiscord_app`, only works on Discord.

Older versions of discord used `webpackJsonp` array.

## Recursive VSCode

`window.module` is a webpack module, and we recurse down to find all children.
Does not work very well, and AFAIK only works in vscode.