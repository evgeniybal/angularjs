(function() {
  'use strict';

  angular.module('myApp').component('about', component());

  function component() {
    return {
      templateUrl: '/components/about/about.html'
    };
  }
})();
