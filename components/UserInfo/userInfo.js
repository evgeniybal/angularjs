(function(angular) {
  'use strict';

  function UserController() {
    var ctrl = this;
    ctrl.delete = function() {
      ctrl.onDelete({ hero: ctrl.hero });
    };
  }

  angular.module('myApp').component('userInfo', {
    templateUrl: '/components/UserInfo/userInfo.html',
    controller: UserController,
    bindings: { name: '@', hero: '<', onDelete: '&', onUpdate: '&' }
  });
})(window.angular);
