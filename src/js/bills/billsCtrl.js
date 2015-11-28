(function () {
    'use strict';

    angular
        .module('bills')
        .controller('billsCtrl', billsCtrl);



    function billsCtrl($scope, $http, Bills) {
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

        $scope.categories = ["Rachunki", "Żarełko", "Sprzątanie", "Lista zakupów"];


        $scope.formSend = Bills.emptyForm();

        $scope.addBill = function () {
            var date = new Date();
            $scope.formSend.creator = "Ja";
            $scope.billsList.push($scope.formSend);
            $scope.updateBill();        // Fix
            $scope.formSend = Bills.emptyForm();
        };
        $scope.category = "Rachunki";
        $scope.currentCategory = $scope.category;

        function setCurrentCategory (category){
            $scope.currentCategory = category;
        }

        $scope.setCurrentCategory = setCurrentCategory;


        $scope.updateBill = function () {
            $http.get('https://homemanager.herokuapp.com/api/expenses/:' + 0)       //Fix that shit (id what?)
                .then(function(response){ $scope.billList[4] = response; }, function(){ $scope.billList[1] = {}; });
        };

        $scope.errorBill = function() {
            console.log("Someting went wrong while posting a bill! Yikes!");
        };

        $scope.postBill = function(){
            $http.post('https://homemanager.herokuapp.com/api/expenses', $scope.formSend).then($scope.addBill, $scope.errorBill);
        };
    }


})();