angular.module('starter.directives', [])
//////////////////////////////////////////////////////////
.directive('map', function() {
  return {
    restrict: 'E',
    scope: {
      onCreate: '&'
    },
    link: function ($scope, $element, $attr) {
      function initialize() {
        var mapOptions = {
          center: new google.maps.LatLng(48.867471, 2.363816),
          zoom: 16,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        var map = new google.maps.Map($element[0], mapOptions);
  
        $scope.onCreate({map: map});

        // Stop the side bar from dragging when mousedown/tapdown on the map
        google.maps.event.addDomListener($element[0], 'mousedown', function (e) {
          e.preventDefault();
          return false;
        });
      }

      if (document.readyState === "complete") {
        initialize();
      } else {
        google.maps.event.addDomListener(window, 'load', initialize);
      }
    }
  }
})
////////////////////////////////////////////////////////
.directive('dragBack', function($ionicGesture, $state) {
    return {
        restrict : 'EAC',
        link : function(scope, elem, attr) {
            $ionicGesture.on('swiperight', function(event) {
                event.preventDefault();
                window.history.back();
            }, elem);
        }
    }
});
