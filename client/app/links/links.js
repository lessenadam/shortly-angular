angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links) {

  $scope.data = {};

  // Your code here
  Links.getAll()
  .then(function(data) {
    console.log('inside link controller, links.getall() returns: ', data);
    $scope.data.links = data;
  })
  .catch(function(error) {
    console.log('error from get links: ', error);
  });


});
