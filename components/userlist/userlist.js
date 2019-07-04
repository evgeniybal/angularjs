(function() {
  'use strict';

  angular.module('myApp').component('userlist', component());

  function component() {
    function componentController() {
      var ctrl = this;

      init();

      function init() {}
    }

    return {
      templateUrl: '/components/userlist/userlist.html',
      bindings: { users: '<' },
      controller: componentController
    };
  }
})();
