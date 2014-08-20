'use strict';

// var angular = require('angular');
require('angular-cookies');

var myApp = angular.module('myApp', ['ngSanitize', 'ngResource', 'ngCookies', 'ngRoute']);

// CONTROLLERS ----------------------------------------------------------------
require('./config');

// CART -----------------------------------------------------------------
require('./cart/services/items.js');

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


myApp.controller('MainCtrl',
  function ($scope, $location, Data) {
    $scope.data = Data;
  }
);


myApp.controller('CartController',
  function ($scope, $location, Items) {

    $scope.bill = {};
    $scope.items = Items.query();

    $scope.remove = function (index) {
      $scope.items.splice(index, 1);
    };

    var calculateTotals = function () {
      var total = 0;
      for (var i = 0; i < $scope.items.length; i++) {
        total = total + $scope.items[i].price * $scope.items[i].quantity;
      }
      $scope.bill.total = total;
      $scope.bill.discount = total > 200 ? 10 : 0;
      $scope.bill.subtotal = total - $scope.bill.discount;
    }

    $scope.$watch('items', calculateTotals, true);

  }
);

myApp.controller('StartUpController',
  function ($scope) {
    $scope.funding = {startingEstimate: 0};

    var computeNeeded = function () {
      $scope.funding.needed = $scope.funding.startingEstimate * 10;
    };

    $scope.$watch('funding.startingEstimate', computeNeeded);

    $scope.requestFunding = function () {
      console.log('Sorry, please get more clients first.');
    }

    $scope.reset = function () {
      $scope.funding.startingEstimate = 0;
    }

  }
);


myApp.controller('MenuCtrl', function ($scope) {
  $scope.isDisabled = false;
  $scope.menuState = {
    show: false
  };

  $scope.toggleMenu = function () {
    $scope.menuState.show = !$scope.menuState.show;
  };
  $scope.stun = function () {
    // do something
    $scope.isDisabled = true;
  };

});
