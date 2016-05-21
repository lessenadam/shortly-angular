angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  // Your code here
  $scope.link = {};
  $scope.test = false;  

  $scope.addLink = function() {
    console.log('scope.newLink: ', $scope.newLink);
    
    if ($scope.newLink) {
      Links.addOne($scope.newLink);
      $scope.newLink = '';
    }

  };

  // $scope.$watch('url.text' , function (newValue, oldValue) {
  //   console.log('my function is watching the link: ', newValue);
  //   if (newValue && newValue.length > 0) {
  //     if ($scope.isValidUrl(newValue)) {
  //       $scope.test = true;
  //       $scope.expression = '';
  //     } else {
  //       $scope.expression = 'error';
      // }
      
  //   }
  // });

  // $scope.isValidUrl = function (url) {
  //   var rValidUrl = /^(?!mailto:)(?:(?:https?|ftp):\/\/)?(?:\S+(?::\S*)?@)?(?:(?:(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[0-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]+-?)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]+-?)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))|localhost)(?::\d{2,5})?(?:\/[^\s]*)?$/i;
  //   return url.match(rValidUrl);
  // };


});
