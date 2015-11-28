(function () {
    'use strict';

    angular
        .module('bills', ['ui.router', 'common'])
        .config(function ($stateProvider) {
            $stateProvider.state('bills', {
                url: '/bills',
                templateUrl: 'js/bills/bills.html',
                controller: 'billsCtrl'
            });
        });
})();