(function() {
  'use strict';

  angular.module('myApp').component('errorMessage', component());

  function component() {
    function componentController() {
      var vm = this;

      function _getErrorDescription(error) {
        switch (error) {
          case 'required':
            return 'This field is required';

          case 'email':
            return 'Enter a valid email address';

          case 'maxlength':
            return 'Exceeds maximum limit';

          case 'minlength':
            return 'Less than minimum length';

          case 'pattern':
            return 'Invalid format';

          default:
            return 'Entered value is not valid';            
        }
      }

      vm.getMessage = function() {
        if (!vm.field) return '';

        var errors = Object.keys(vm.field.$error);
        if (!vm.field.$pristine && vm.field.$error && errors.length > 0) {
          return _getErrorDescription(errors[0]);
        }
        return '';
      };
      init();

      function init() {}
    }

    return {
      templateUrl: '/components/errorMessage/errorMessage.html',
      bindings: { field: '<' },
      controller: componentController
    };
  }
})();
