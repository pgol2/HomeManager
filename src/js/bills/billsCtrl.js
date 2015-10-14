(function () {
    'use strict';

    angular
        .module('bills')
        .controller('billsCtrl', billsCtrl);

    function billsCtrl($scope, $http) {
        $scope.test = 'test';

        $scope.billsList = [
            {
                title: "Prad",
                value: "800"
            }, {
                title: "Woda",
                value: "10.5"
            }
        ];

        var emptyForm = function(){
            return {
                title: "",
                value: ""
            };
        };

        $scope.formSend = emptyForm();

        $scope.addBill = function () {
            $scope.billsList.push($scope.formSend);
            $scope.formSend = emptyForm();
        };

        $scope.postBill = function(){
            $http.post('https://homemanager.herokuapp.com/api/expenses', $scope.formSend).then($scope.addBill);
        };
    }


})();