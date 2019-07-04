(function () {
    'use strict';

    angular
        .module ('myApp')
        .component ('app', component());


    function component() {

        function componentController(){
            var ctrl = this;
            ctrl.add = function(){
                
                ctrl.users.push(ctrl.user);
                ctrl.user = null;
                debugger;
            }
            init();

            function init(){
                console.log('Init ');
                ctrl.users = [];
            }
        }

        return {
            templateUrl: 'app.html',
            bindings: {},
            controller: componentController,
            
        }
    }

} ());