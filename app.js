(function() {
  'use strict';

  angular.module('myApp').component('app', app());

  function app() {
    function appController() {
      var ctrl = this;

      init();

      function init() {}
    }

    return {
      template: '<user-manager></user-manager>',
      bindings: {},
      controller: appController
    };
  }
})();
