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
                category: "Rachunki",
                creator: "Ja",
                created: "20/7/2015",
                value: "800"
            }, {
                title: "Woda",
                category: "Rachunki",
                creator: "Ja",
                created: "23/8/2016",
                value: "10.5"
            }
        ];

        var emptyForm = function(){
            return {
                title: "",
                category: "",
                creator: "",
                created: "",
                value: ""
            };
        };

        $scope.formSend = emptyForm();

        $scope.addBill = function () {
            $scope.billsList.push($scope.formSend);
            $scope.formSend = emptyForm();
        };

        $scope.errorBill = function() {


        };

        $scope.postBill = function(){
            $http.post('https://homemanager.herokuapp.com/api/expenses', $scope.formSend).then($scope.addBill, $scope.errorBill);
        };
    }


})();