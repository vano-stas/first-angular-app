'use strict';

var myApp = angular.module('myApp', []);

myApp.controller('ButtonController', function ($scope, $http) {

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

    $scope.testGet = function () {
        fetch('https://cors-anywhere.herokuapp.com/https://postman-echo.com/get?foo1=bar1&foo2=bar2', {
            // fetch('https://postman-echo.com/get?foo1=bar1&foo2=bar2', {
            // mode: 'no-cors',
            mode: 'cors',
            headers: {
                'Access-Control-Allow-Origin': '*'
            }
        })
            .then(function (response) {
                return response.json()
            })
            .then(data => {
                console.log('GET: ', data.args);
            })
    };

    $scope.testPost = function (url = 'https://cors-anywhere.herokuapp.com/https://postman-echo.com/post', data = {
        "www": "rrr"
    }) {
        return fetch(url, {
            method: 'POST',
            mode: 'cors',
            cache: 'no-cache',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json',
            },
            redirect: 'follow',
            referrer: 'no-referrer',
            body: JSON.stringify(data),
        })
            .then(response => response.json())
            .then(res => console.log('POST: ', res.data));
    }

    $scope.testPut = function (url = 'https://cors-anywhere.herokuapp.com/https://postman-echo.com/put?test=task%201') {
        return fetch( url, {
            method: 'PUT',
        })
        .then(response => response.json())
        .then(res => console.log('PUT: ', res.args));
        
    }

    $scope.testDelete = function (url = 'https://cors-anywhere.herokuapp.com/https://postman-echo.com/delete?test=delete') {
        return fetch( url, {
            method: 'DELETE',
        })
        .then(response => response.json())
        .then(res => console.log('DELETE: ', res.args));
    }

    $scope.testRequest = function () {
        console.log('work click');
        $scope.testGet();
        $scope.testPost();
        $scope.testPut();
        $scope.testDelete();
    }
});