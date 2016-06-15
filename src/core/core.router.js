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
        .when('/userHome',{
            templateUrl:'components/userHome/userLanding.html',
            controller:'LandingController',
            controllerAs:'landingCtrl'
        })
        .when('/donate',{
            templateUrl:'components/donate/donate.html',
            controller:'DonateController',
            controllerAs:'donateCtrl'
        })
        .otherwise('/home')
    }
})();
