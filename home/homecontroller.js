(function () {
    'use strict';

    angular
        .module('app')
        .controller('HomeController', Controller);

    function Controller($scope) {
        
        $scope.isCollapsed = true;
        
        var vm = this;

        initController();

        function initController() {
        }
        
    }


})();