# Module Grabbers

Webpack? Yeah no web-unpack.

See CONTRIBUTING.md pls thx

## `webpackJsonp`

`webpackJsonp` is either an array to which we can push to to grab modules,
or a function which we can call to push to to grab modules.

Grammar moment ("to to").

Works on:

- Slack
- Twitter
  - Tweetdeck
- MS Teams (not the rest of Office 365!)

## Loaded chunks

Used by some sites with
[`@loadable/component`](https://github.com/gregberge/loadable-components),
works on:

- Reddit

## Parcel Require

Works on apps built with Parcel. No currently known sites/apps.

## Chunk:

`webpackChunk{something}`, for apps with webpack chunks.

Works on:

- Discord: `webpackChunkdiscord_app`
- Telegram: `webpackChunktelegram_t` (PARTIALLY: only returns default exports (i think thats what they are?))

## Recursive VSCode

`window.module` is a webpack module, and we recurse down to find all children.
Does not work very well, and AFAIK only works in vscode.
