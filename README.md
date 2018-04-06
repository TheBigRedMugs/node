# node-cue-sdk-2

This is a fork of the great package, node-cue-sdk, by Yannicked. Please check his version out before continuing!

https://www.npmjs.com/package/cue-sdk-node

I have made only slight modifications to his code to fit my needs.

## Modifications

* Updated to version 2.18.127 of the CUE SDK
* Manually include SDK files, point to version 2015, don't download the ZIP
* Include support for "releasing" and "renewing" they keyboard. This allows CUE to take over after you're done, if you have a single node process running. 


Original Readme Below:

---------------------------------------

### Node.js Corsair Cue SDK wrapper
`node-cue-sdk` is a Node.js addon for loading and and using the Cue SDK in
pure JavaScript.

### <a href="https://github.com/Yannicked/node-cue-sdk/wiki/Documentation">Documentation</a>

Example with asynchonous functions
-------

``` js
var CueSDK = require('node-cue-sdk');

var cue = new CueSDK.CueSDK();

// The CueSDK.set function can also work asynchonously, just add a function to the arguments and it'll be asynchonous
cue.set('A', 255, 255, 0, function() { // This is the function which get called after completion
    console.log('Lights set!');
});

cue.set([
    ['A', 255, 0, 0],
    ['S', 0 , 255, 0],
    ['D', 0, 0, 255]
], function() { // This is the function which get called after completion
    console.log('Three lights set!');
}); // Set A to red, S to green, and D to blue

// fade from black [0, 0, 0] to cyan [0, 255, 255] in 1000ms
cue.fade('Logo', [0, 0, 0], [0, 255, 255], 1000, function() {
    console.log('This will run when the fading has completed!');
});

```
***
Example with synchonous functions
-------

``` js
var CueSDK = require('node-cue-sdk');

var cue = new CueSDK.CueSDK();

cue.set('W', 255, 255, 255); // Set the W key to #FFFFFF aka white

// You can set multiple colors at the time!
cue.set([
    ['A', 255, 0, 0],
    ['S', 0 , 255, 0],
    ['D', 0, 0, 255]
]); // Set A to red, S to green, and D to blue

// Special keys/lights are also supported!
cue.set('Logo', 255, 255, 0); // Make the Corsair logo yellow

// To turn off all leds
cue.clear();

```

Requirements
------------

 * Windows (Linux and Mac OSX are currently not supported by the CueSDK)
 * Node.js ```5.0.0``` or higher

Installation
------------

Make sure you've installed all the [necessary build
tools](https://github.com/TooTallNate/node-gyp#installation),
then run this command in the source directory:

``` bash
$ npm install cue-sdk-node
```
