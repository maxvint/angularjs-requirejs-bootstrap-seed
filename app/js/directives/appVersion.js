'use strict';

define([ './module-decl' ], function(module) {
  module.directive('appVersion', [ 'version', function(version) {

    return function(scope, elm, attrs) {
      elm.text(version);
    };

  } ]);
});