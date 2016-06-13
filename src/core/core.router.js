(function () {
    'use strict';

    var core = angular.module('app.core');

    core.config(configFunction);

    configFunction.$inject = ['$locationProvider', '$stateProvider', '$routeProvider'];

    /* @ngInject */
    function configFunction($locationProvider, $stateProvider, $routeProvider) {

        $locationProvider.html5Mode(true);

        $routeProvider
        .when('/home',{
                templateUrl:'components/home/home.html'
        })
        .when('/login',{
            templateUrl:'components/login/login.html',
            controller:'LoginController',
            controllerAs:'loginCtrl'
        })
        .when('/signUp',{
            templateUrl:'components/signUp/signUp.html',
            controller:'SignUpController',
            controllerAs:'signUpCtrl'
        })
        .otherwise('/home')
    }
})();
