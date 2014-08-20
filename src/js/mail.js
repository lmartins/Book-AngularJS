'use strict';

// var angular = require('angular');
// require('angular-cookies');

var AMail = angular.module('AMail', ['ngRoute']);

// CONTROLLERS ----------------------------------------------------------------
require('./mailConfig');

// CART -----------------------------------------------------------------
// require('./cart/services/items.js');

// HELLO WORD -----------------------------------------------------------------
// require('./HelloWorld/controllers/helloWorldCtrl.js');


// DIRECTIVES -----------------------------------------------------------------
// require('./controllers/SampleDirectiveController');


// FILTERS --------------------------------------------------------------------
// require('./filters');


// SERVICES -------------------------------------------------------------------
// require('./services/calendarHelper');


var messages = [{
    id: 0, sender: 'jean@somecompany.com', subject: 'Hi there, old friend',
    date: 'Dec 7, 2013 12:32:00', recipients: ['greg@somecompany.com'],
    message: 'Hey, we should get together for lunch sometime and catch up.'
    +'There are many things we should collaborate on this year.'
  }, {
    id: 1,  sender: 'maria@somecompany.com',
    subject: 'Where did you leave my laptop?',
    date: 'Dec 7, 2013 8:15:12', recipients: ['greg@somecompany.com'],
    message: 'I thought you were going to put it in my desk drawer.'
    +'But it does not seem to be there.'
  }, {
    id: 2, sender: 'bill@somecompany.com', subject: 'Lost python',
    date: 'Dec 6, 2013 20:35:02', recipients: ['greg@somecompany.com'],
    message: 'Nobody panic, but my pet python is missing from her cage.'
    +'She doesn\'t move too fast, so just call me if you see her.'
} ];

AMail.controller('ListController', function ($scope) {
  $scope.messages = messages;
});


AMail.controller('DetailController', function ($scope, $routeParams) {
  $scope.message = messages[$routeParams.id];
})
