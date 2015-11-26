(function () {
    'use strict';

    angular
        .module('bills')
        .controller('billsCtrl', billsCtrl);

    function billsCtrl($scope, $http, Bills) {
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

        $scope.formSend = Bills.emptyForm();

        $scope.addBill = function () {
            var date = new Date();
            $scope.formSend.creator = "Ja";
            $scope.formSend.created = date.getDay() + "/" + date.getDate() + "/" + date.getFullYear();
            $scope.billsList.push($scope.formSend);
            $scope.formSend = Bills.emptyForm();
            //Pobranie nowej formy, nie wysylanie 
        };

        $scope.errorBill = function() {

        };

        $scope.postBill = function(){
            $http.post('https://homemanager.herokuapp.com/api/expenses', $scope.formSend).then($scope.addBill, $scope.errorBill);
        };
    }


})();