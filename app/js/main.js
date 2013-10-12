// Require JS  Config File

require.config({
  paths : {
    "angular" : "lib/angular/angular",
    "angular-resource" : "lib/angular/angular-resource",
    "jquery" : "lib/jquery/jquery",
    "ui-utils" : "lib/ui-utils/ui-utils",
    "ui-utils-ieshiv" : "lib/ui-utils/ui-utils-ieshiv",
    "ui-bootstrap-tpls" : "lib/ui-bootstrap/ui-bootstrap-tpls",
  },
  shim : {
    jquery : {
      exports : "jQuery"
    },
    angular : {
      exports : "angular",
      deps : [ "jquery" ]
    },
    'angular-resource' : {
      deps : [ "angular" ]
    },
    'ui-utils' : {
      deps : [ 'angular' ]
    },
    'ui-utils-ieshiv' : {
      deps : [ 'angular', 'ui-utils' ]
    },
    'ui-bootstrap-tpls' : {
      deps : [ 'angular' ]
    }
  },
  baseUrl : 'js/'
});

require([ "app" ], function(App) {
  App.initialize();
});