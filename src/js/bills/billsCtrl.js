(function () {
    'use strict';

    angular
        .module('bills')
        .controller('billsCtrl', billsCtrl);

    function billsCtrl($scope) {
        $scope.test = 'test';
    }


})();