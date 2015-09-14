ezadApp.directive('channelsView', [
  function() {
    return {
      restrict: 'E',
      transclude: true,
      scope: {},
      template: '<div ng-transclude></div>',
      controller: function($scope, $element, $attrs) {
        var channels = $scope.channels = [];

        this.getWidth = function() {
          return $element[0].clientWidth
        }
      },
    }
}])
.directive('channelView', [
  function() {
    return {
      require: '^channelsView',
      restrict: 'E',
      scope: {
        'channel': '=',
        'getImage': '&',
        'toggleOpen': '=',
      },
      transclude: true,
      templateUrl: 'directives/channel-view.html',
      link: function(scope, element, attrs, channelsCtrl) {
        var parentWidth = channelsCtrl.getWidth();

        scope.$watch('channel.show', function(newValue, oldValue) {
          //scope.getImage({id: scope.channel.id});
        });
        
        scope.$watch( function() { return element[0].clientWidth }, function(newValue, oldValue) {
          element[0].clientHeight = element[0].clientWidth*3/4;
        });

        if(scope.channel.show || scope.channel.left || scope.channel.right) {
          //scope.getImage({id: scope.channel.id, image: scope.image});
        }

        scope.$watch( function() { return scope.toggleOpen}, function(newValue, oldValue) {
          if(scope.channel.show) {
            if(newValue) {                
                element[0].style.width = "100%";
                element[0].style.left = "0";
              } else {
                element[0].style.width = "";
                element[0].style.left = "";
              }
          }
        });
      }
    }
}]);