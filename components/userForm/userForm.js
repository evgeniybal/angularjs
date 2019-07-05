(function() {
  'use strict';

  angular.module('myApp').component('userForm', userForm());

  function userForm() {
    function userFormController() {
      var ctrl = this;

      ctrl.getFieldInfo = function(name){
        var touched = ctrl.form[name].$touched;
        var errors = '';
debugger;
      return ctrl.form[name];
      }
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
