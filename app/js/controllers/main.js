'use strict';

ezadApp.controller('MainCtrl', ['$scope',
  function($scope) {
    $scope.Text = "Hello~~~";
  }
]);

ezadApp.controller('AnotherCtrl', ['$scope', '$routeParams',
  function($scope, $routeParams) {
    $scope.Text = "Another Page : " + $routeParams.id ;
  }
]);