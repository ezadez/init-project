'use strict';

var ezadApp = angular.module('ezadApp', [
  'ngRoute',
]);

ezadApp.config(['$routeProvider', 
  function ($routeProvider) {
    $routeProvider
      .when('/test', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/another/:id', {
        templateUrl: 'views/another.html',
        controller: 'AnotherCtrl'
      })
      .otherwise({
        redirectTo: '/test'
      });
  }
]);
