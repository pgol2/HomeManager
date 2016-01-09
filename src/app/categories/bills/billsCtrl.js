(function () {
    'use strict';

    angular
        .module('bills')
        .controller('billsCtrl', billsCtrl);
    function billsCtrl($scope, $http, Bills) {
        $scope.billsList = [];
        $scope.categories = ["Rachunki", "Żarełko", "Sprzątanie", "Lista zakupów"];
        $scope.formSend = Bills.emptyForm();
        $scope.category = "Inne";

        $scope.currentCategory = $scope.category;
        function setCurrentCategory (category){
            $scope.currentCategory = category;
        }
        $scope.setCurrentCategory = setCurrentCategory;



        $scope.updateBill = function () {
            $http.get('https://homemanager.herokuapp.com/api/expenses')
                .then(function(response){ $scope.billsList = response.data; },$scope.errorBill);
        };
        $scope.updateBill();


        $scope.errorBill = function() {
            console.log("Something went wrong while posting a bill! Yikes!");
        };

        $scope.postBill = function(){
            $scope.formSend.creator = "Dizel";
            $scope.formSend.category = $scope.currentCategory;
            $scope.billsList.push($scope.formSend);
            $http.post('https://homemanager.herokuapp.com/api/expenses', $scope.formSend).then($scope.addBill, $scope.errorBill);
            $scope.formSend = Bills.emptyForm();
            $scope.updateBill();
        };
    }


})();