'use strict';

var AMail = angular.module('AMail');

AMail.config(function ($routeProvider) {
  $routeProvider
    .when('/',
      {
        controller: 'ListController',
        templateUrl: 'amail/list.html'
      })
    .when('/view/:id',
      {
        controller: 'DetailController',
        templateUrl: 'amail/detail.html'
      })
    .otherwise({
      redirectTo: '/'
    });

  // $locationProvider.html5Mode(true);
});
