(function () {
    'use strict';

    angular
        .module('bills', ['common', 'ui.router'])
        .config(function ($stateProvider) {
            $stateProvider.state('bills', {
                url: '/bills',
                templateUrl: 'app/categories/bills/bills.html',
                controller: 'billsCtrl'
            });
        });
})();