(function () {
    'use strict';

    angular
        .module('categories.bills', [
            'common',
            'homeApp',
            'ui.router'
        ])
        .config(function ($stateProvider) {
            $stateProvider
                .state('bills', {
                url: '/bills',
                templateUrl: 'app/categories/bills/bills.html',
                controller: 'billsCtrl'
            });
        });
})();