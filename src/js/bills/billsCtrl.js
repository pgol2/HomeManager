(function () {
    'use strict';

    angular
        .module('bills')
        .controller('billsCtrl', billsCtrl);

    function billsCtrl($scope) {
        $scope.test = 'test';

        $scope.billsList = [
            {
                title: "Prund",
                value: "800$"
            }, {
                title: "Wuda",
                value: "10.5$"
            }
        ];

        $scope.addBill = function(){
                $scope.billsList.push({title: $scope.formBillTitle, value: $scope.formBillValue + ".00 $"});
        };
    }


})();