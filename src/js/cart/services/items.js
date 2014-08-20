'use strict';

var myApp = angular.module('myApp');
myApp.factory('Items', function () {
  var items = {};
  items.query = function () {
    // in real apps we'de pull this data from the server
    return [
      {title: 'Paint pots', quantity: 8, price: 3.95 },
      {title: 'Plka dots', quantity: 17, price: 12.95 },
      {title: 'Pebbles', quantity: 5, price: 6.95 }
    ]
  }
  return items;
});
