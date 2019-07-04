(function() {
  'use strict';

  angular.module('myApp').component('userForm', userForm());

  function userForm() {
    function userFormController() {
      var ctrl = this;

      ctrl.addUser = function() {
        var newUser = Object.assign({}, ctrl.user);
        ctrl.onAddUser({ user: newUser });
      };

      init();

      function init() {
        //        ctrl.user = { firstName: 'Ivan', lastName: 'Pomidorov' };
      }
    }

    return {
      templateUrl: '/components/userForm/userForm.html',
      bindings: { onAddUser: '&' },
      controller: userFormController
    };
  }
})();
