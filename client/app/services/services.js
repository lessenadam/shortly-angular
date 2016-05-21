angular.module('shortly.services', [])

.factory('Links', function ($http) {
  // Your code here
  //get the links from server which gets it from the db.

  var getdata = function () {
    return $http({
      method: 'GET',
      url: '/api/links'
    })
    .then(function (data) {
      console.log('data received from getdata in factory: ', data.data);
      // array of objects with urls and titles 
      return data.data;
    });
  };

  var postdata = function (url) {
    url = url || '';
    url = {url: url};
    console.log('going to post data: ', url);
    return $http({
      method: 'POST',
      url: '/api/links',
      data: url
    })
    .then(function (link) {
      console.log('link received from link creation: ', link);
      // object with data.url and data.title and response
      return link;
    });
  };


  // var service = {};
  // service.getLinks = getdata;
  // return service;
  return {
    getAll: getdata,
    addOne: postdata
  };
})
.factory('Auth', function ($http, $location, $window) {
  // Don't touch this Auth service!!!
  // it is responsible for authenticating our user
  // by exchanging the user's username and password
  // for a JWT from the server
  // that JWT is then stored in localStorage as 'com.shortly'
  // after you signin/signup open devtools, click resources,
  // then localStorage and you'll see your token from the server
  var signin = function (user) {
    console.log('useris-------: ', user);
    return $http({
      method: 'POST',
      url: '/api/users/signin',
      data: user
    })
    .then(function (resp) {
      return resp.data.token;
    });
  };

  var signup = function (user) {
    return $http({
      method: 'POST',
      url: '/api/users/signup',
      data: user
    })
    .then(function (resp) {
      return resp.data.token;
    });
  };

  var isAuth = function () {
    return !!$window.localStorage.getItem('com.shortly');
  };

  var signout = function () {
    $window.localStorage.removeItem('com.shortly');
    $location.path('/signin');
  };


  return {
    signin: signin,
    signup: signup,
    isAuth: isAuth,
    signout: signout
  };
});
