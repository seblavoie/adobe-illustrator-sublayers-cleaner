# Adobe Illustrator Sublayer Helper

This script helps cleaning up sublayers in Illustrator. 

![](https://s3-us-west-2.amazonaws.com/sebastienlavoie.personal/adobe-illustrator-sublayers-cleaner.png)

The script will prepend all sublayers with the parent layers name and remove the unnecessary *copy [number]* in the sublayers names.

> Make sure that the root layer’s subobjects are sublayers by using *Release to Layers (Sequence)*.

## Installation

### Option 1

Save `Clean Sublayers.jsx` in your scripts folder.

- Windows: `Program Files\Adobe\Adobe Illustrator <version>\Presets\<language>/Scripts`
- OS X: `/Applications/Illustrator <version>/Presets/<language>/Scripts`

### Option 2

Run it from ExtendScript Toolkit.

## Development

1. Make sure you have [coffeescript](http://coffeescript.org) installed.
2. Run `cake watch` from the root of folder.
3. Run `cake build` to output .jsx file.
