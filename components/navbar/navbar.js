(function() {
  'use strict';

  angular.module('myApp').component('navbar', component());

  function component() {
    return {
      templateUrl: '/components/navbar/navbar.html'
    };
  }
})();
