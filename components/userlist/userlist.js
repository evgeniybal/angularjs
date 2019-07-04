(function() {
  'use strict';

  angular.module('myApp').component('userList', userList());

  function userList() {
    function userListController() {
      var ctrl = this;

      ctrl.delete = function(index) {
        var user = { user: ctrl.users[index] };
        ctrl.onDelete(user);
      };
      init();

      function init() {}
    }

    return {
      templateUrl: '/components/userlist/userList.html',
      bindings: { users: '<', onDelete: '&' },
      controller: userListController
    };
  }
})();
