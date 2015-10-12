(function () {
    'use strict';

    angular
        .module('bills')
        .controller('billsCtrl', billsCtrl);

    function billsCtrl($scope) {
        $scope.test = 'test';

        $scope.billsList = [
            {
                name: "Prund",
                cost: "800$"
            }, {
                name: "Wuda",
                cost: "10.5$"
            }
        ];

        $scope.addBill = function(){
                $scope.billsList.push({name: $scope.formBillName, cost: $scope.formBillCost + ".00 $"});
        };
    }


})();