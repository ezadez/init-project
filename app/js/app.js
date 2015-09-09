'use strict';

var ezadApp = angular.module('ezadApp', [
  'ngRoute',
  'ngAnimate',
  'hmTouchEvents',
]);

ezadApp.constant('ROUTE_CONFIG', {
  'default': 'channel',
  'routes': [{'name':'CH', 'href':'channel', 'url':'views/channel.html', 'controller':'ChannelCtrl'}
  ,{'name':'Event', 'href':'event', 'url':'views/event.html', 'controller':'EventCtrl'}
  ,{'name':'Setup', 'href':'setup', 'url':'views/setup.html', 'controller':'SetupCtrl'}
  ,{'name':'About', 'href':'about', 'url':'views/about.html', 'controller':'AboutCtrl'}],
  'product': {'name': 'iPolis'},
});

ezadApp.config(['$routeProvider', 
  'ROUTE_CONFIG', 
  function ($routeProvider, ROUTE_CONFIG) {
    for(var i = 0; i < ROUTE_CONFIG['routes'].length; i++) {
      var route = ROUTE_CONFIG.routes[i]
      $routeProvider
      .when('/' + route.href, {
        templateUrl: route.url,
        controller: route.controller,
      })
    }
    $routeProvider.otherwise('/' + ROUTE_CONFIG['default']);
  }
]);

ezadApp.controller('mainCtrl', 
  ['$scope',
  '$location',
  'ROUTE_CONFIG',
  function($scope, $location, ROUTE_CONFIG) {
    $scope.menuOpen = true;
    $scope.routes = ROUTE_CONFIG['routes'];
    $scope.product = ROUTE_CONFIG['product']['name'];

    $scope.onMenu = function(route) {
      var path = $location.path();
      if(path.indexOf(route.href) > 0) {
        return 'on';
      }else {
        return '';
      }
    }
  }
]);
