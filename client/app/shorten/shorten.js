angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  // Your code here
  $scope.link = {};

  $scope.addLink = function() {
    console.log('scope.newLink: ', $scope.newLink);
    Links.addOne($scope.newLink);
    $scope.newLink = '';
  };


});
