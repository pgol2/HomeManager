(function () {
    'use strict';

    angular
        .module('bills', ['ui.router'])
        .config(function ($stateProvider) {
            $stateProvider.state('bills', {
                url: '/',
                templateUrl: 'js/bills/bills.html',
                controller: 'billsCtrl'
            });
        });
})();