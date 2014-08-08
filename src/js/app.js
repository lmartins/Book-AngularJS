'use strict';

// var angular = require('angular');
require('angular-cookies');

var myApp = angular.module('myApp', ['ngSanitize', 'ngResource', 'ngCookies', 'ngRoute']);

// CONTROLLERS ----------------------------------------------------------------
require('./config');

// HELLO WORD -----------------------------------------------------------------
// require('./HelloWorld/controllers/helloWorldCtrl.js');


// DIRECTIVES -----------------------------------------------------------------
// require('./controllers/SampleDirectiveController');


// FILTERS --------------------------------------------------------------------
// require('./filters');


// SERVICES -------------------------------------------------------------------
// require('./services/calendarHelper');


// CONTROLLERS À LÁ CARTE
// Quick code snippets to be removed or placed in proper places

myApp.factory('Data', function () {
  return {
    message: 'Im data from a service'
  }
});

myApp.controller('MainCtrl',
  function ($scope, $location, Data) {
    $scope.data = Data;
  }
);


myApp.controller('CartController',
  function ($scope, $location, Data) {
    $scope.items = [
      {title: 'Paint pots', quantity: 8, price: 3.95 },
      {title: 'Plka dots', quantity: 17, price: 12.95 },
      {title: 'Pebbles', quantity: 5, price: 6.95 }
    ];

    $scope.remove = function (index) {
      $scope.items.splice(index, 1);
    };
  }
);
