'use strict';

define([ './module-decl' ], function(module) {
  module.controller('HighlightCtrl', [ '$scope', function($scope) {
    $scope.date = new Date('03/19/2013');
  } ]);
});