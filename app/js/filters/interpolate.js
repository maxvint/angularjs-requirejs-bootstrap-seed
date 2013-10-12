'use strict';

define([ './module-decl' ], function(module) {
  module.filter('interpolate', [ 'version', function(version) {

    return function(text) {
      return String(text).replace(/\%VERSION\%/mg, version);
    };
  } ]);
});
