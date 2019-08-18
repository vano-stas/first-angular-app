'use strict';

var myApp = angular.module('myApp',[]);

myApp.controller('ButtonController', function($scope, $http) {

  // $http.get('https://postman-echo.com/get?foo1=bar1&foo2=bar2', {
  //     mode: 'no-cors',
  //     headers: {
  //       'Access-Control-Allow-Origin': '*'
  //     }
  //   }).success(function (data) {
  //         console.log(data);
  //     })
  //     .error(function() {
  //       console.log('error')
  //     })


  $scope.testRequest = function() {
      console.log('work click');
      // fetch('https://swapi.co/api/people')
      // .then(response => response.json())
      // .then(data => console.log(data));

      

      fetch('https://postman-echo.com/get?foo1=bar1&foo2=bar2', {
        mode: 'no-cors',
        headers: {
          'Access-Control-Allow-Origin': '*'
        }
      })
      .then(function(response) {
        return response
      })
      .then(data => {
        console.log(data);
      })
  };
});