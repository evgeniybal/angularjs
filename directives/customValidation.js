(function() {
  'use strict';

  angular.module('myApp').directive('adult', directive);

  /** @ngInject */
  function directive() {
    function directiveController() {
      var vm = this;

      init();

      function init() {}
    }

    function link(scope, element, attributes, control) {
        debugger;
      control.$validators.adult = function(modelValue, viewValue) {
        if (control.$isEmpty(modelValue)) {
          // if empty, correct value
          return true;
        }

        var age = Number(viewValue);

        if (age >= 18 && age <= 100) {
          // correct value
          return true;
        }
        return {error:true, message:'To Young'}; // wrong value
      };
    }

    return {
      require: 'ngModel',
      bindToController: true,
      controller: directiveController,
      controllerAs: 'Ctrl',
      link: link,
      restrict: 'AE',
      scope: {}
    };
  }
})();
