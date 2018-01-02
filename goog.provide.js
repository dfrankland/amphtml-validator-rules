/* eslint-disable */

// This function emulates `goog.provide`:
// https://developers.google.com/closure/library/docs/tutorial#creating-a-namespace-with-googprovide
//
// Instead of just namespaceing, it exports via `module.exports` to make it a
// normal commonjs module.

var goog = {};

goog.provide = function provide(googProvidePath) {
  var parts = googProvidePath.split('.');

  var lastPart = module.exports;
  for (var i = 0; i < parts.length; i += 1) {
    var part = parts[i];
    if (typeof lastPart[part] !== 'object') lastPart[part] = {};
    lastPart = lastPart[part];
  }

  var globalVar = parts[0];
  global[globalVar] = module.exports[globalVar];
};
