angular.module('myApp').config([
  '$routeProvider',
  function config($routeProvider) {
    $routeProvider
      .when('/users', {
        template: '<user-manager></user-manager>'
      })
      .when('/about', {
        template: '<about></about>'
      })
      .when('/phones/:phoneId', {
        template: '<phone-detail></phone-detail>'
      })
      .otherwise('/about');
  }
]);
