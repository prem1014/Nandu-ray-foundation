(function () {
    'use strict';

    var core = angular.module('app.core');

    core.config(configFunction);

    configFunction.$inject = ['$locationProvider', '$stateProvider','$urlRouterProvider', '$routeProvider'];

    /* @ngInject */
    function configFunction($locationProvider, $stateProvider,$urlRouterProvider, $routeProvider) {

        $locationProvider.html5Mode(true);

      /*  $routeProvider
        .when('/home',{
                templateUrl:'components/home/home.html',
                authenticate: false
        })
        .when('/login',{
            templateUrl:'components/login/login.html',
            controller:'LoginController',
            controllerAs:'loginCtrl',
            authenticate: false
        })
        .when('/signUp',{
            templateUrl:'components/signUp/signUp.html',
            controller:'SignUpController',
            controllerAs:'signUpCtrl',
            authenticate: false
        })
        .when('/userHome',{
            templateUrl:'components/userHome/userLanding.html',
            controller:'LandingController',
            controllerAs:'landingCtrl',
            authenticate: true
        })
        .when('/donate',{
            templateUrl:'components/donate/donate.html',
            controller:'DonateController',
            controllerAs:'donateCtrl',
            authenticate: false
        })
        .otherwise('/home')*/
          $stateProvider
    .state("home", {
      url: "/home",
      templateUrl: "components/home/home.html",
      authenticate: false
    })
    .state("login", {
      url: "/login",
            templateUrl:'components/login/login.html',
            controller:'LoginController',
            controllerAs:'loginCtrl',
            authenticate: false
    })
    .state("signOut", {
      url: "/signOut",
            templateUrl:'components/login/signout.html',
            controller:'SignOutController',
            controllerAs:'signOutCtrl',
            authenticate: true
    })
    .state("signUp", {
      url: "/signUp",
            templateUrl:'components/signUp/signUp.html',
            controller:'SignUpController',
            controllerAs:'signUpCtrl',
            authenticate: false
    })
    .state("userHome", {
      url: "/userHome",
            templateUrl:'components/userHome/userLanding.html',
            controller:'LandingController',
            controllerAs:'landingCtrl',
            authenticate: true
    });
  // Send to login if the URL was not found
  $urlRouterProvider.otherwise("/home");
    }
})();
