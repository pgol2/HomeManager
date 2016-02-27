(function () {
    'use strict';

    angular
        .module('categories.bills')
        .controller('billsCtrl', billsCtrl);
    function billsCtrl($scope, $http, Bills, Bills1) {
        $scope.billsList = [];
        $scope.categories = ["Rachunki", "Żarełko", "Sprzątanie", "Lista zakupów"];
        $scope.formSend = Bills.emptyForm();
        $scope.category = "";
        $scope.editing = 0;
        $scope.currentCategory = $scope.category;
        function setCurrentCategory (category){
            $scope.currentCategory = category;
        }
        $scope.setCurrentCategory = setCurrentCategory;

        $scope.edit = function(){
            $scope.editing = !$scope.editing;
        }



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
            $scope.editing = 0;
        };
    }




})();