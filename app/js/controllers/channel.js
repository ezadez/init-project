ezadApp.controller('ChannelCtrl', ['$scope', '$timeout',
  function($scope, $timeout) {
    $scope.channels = [];
    var depthWidth = ['6.25%', '12.5%', '25%'];
    var depthHeight = ['25px', '50px', '100px'];
    var currentDepth = 2;
    var total = 1000;

    var i = 0;
    for( i; i < total ; i++) {
      var imageUrl = "'images/" + (i%16+1) + ".jpg'";
      var data = {'selected': false,
                  'left': i == (total-1) ? true : false,
                  'right': i == 1 ? true : false,
                  'show': i == 0 ? true : false,
                  'id': 'kind-channel-view_'+i,
                  'style': {
                  'background-image': 'url(' + imageUrl +')',
                  },
                 };
      $scope.channels.push(data);
      //상위 스코프에서 받아와야 함
      $scope.toggleOpen = false;
    }
  }
]);