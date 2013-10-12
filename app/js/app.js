define([ "angular",//
"jquery",//
"angular-resource", //
"ui-utils",//
"ui-utils-ieshiv",//
"ui-bootstrap-tpls",//
"services/module-ref",// 
"directives/module-ref",//
"filters/module-ref",//
"controllers/module-ref" ],

function BaseManager(angular) {
  var initialize = function() {

    angular.module('angular.app', []).config(
        [ '$routeProvider', function($routeProvider) {
          $routeProvider.when('/view1', {
            templateUrl : 'partials/partial1.html',
            controller : 'MyCtrl1'
          });
          $routeProvider.when('/view2', {
            templateUrl : 'partials/partial2.html',
            controller : 'MyCtrl2'
          });
          $routeProvider.when('/cat', {
            templateUrl : 'partials/cat.html',
            controller : 'CarouselCatCtrl'
          });
          $routeProvider.when('/highlight', {
            templateUrl : 'partials/highlight.html',
            controller : 'HighlightCtrl'
          });
          $routeProvider.otherwise({
            redirectTo : '/view1'
          });
        } ]);

    angular.bootstrap(document, [ 'angular.app', 'angular.directives',
        'angular.services', 'angular.controllers', 'angular.filters',
        'ngResource', 'ui.utils', 'ui.bootstrap' ]);

  };
  return {
    initialize : initialize
  };
});