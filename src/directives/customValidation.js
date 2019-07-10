
  
  const customValidation = function directive() {
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

        if (age > 18) {
          // correct value
          return true;
        }
        return false; // wrong value
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

export default customValidation;