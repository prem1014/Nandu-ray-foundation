(function() {
    'use strict';

    angular.module('nrf.app', [
        'ngCookies',
        // Common (everybody has access to these)
        'app.core',

        // Features (listed alphabetically)
        'nrf.app.login',
        'nrf.app.signUp',
        'nrf.app.donate',
        'nrf.app.home'
    ])
    .controller('AppController',appController);

    appController.$inject=['$scope','$cookieStore'];

    function appController($scope,$cookieStore){
        if ($cookieStore.get('userDetails') !== undefined){
                            $scope.login = false;
                $scope.logOut = true;
           $scope.loggedInUser=$cookieStore.get('userDetails').userName;
       }
       else{
                        $scope.login = true;
                $scope.logOut = false;
       }
        $scope.$on('loggedin', function () {
            $scope.login = false;
            $scope.logOut = true;
             $scope.loggedInUser = $cookieStore.get('userDetails').userName;
        });
            $scope.$on('signOut', function () {
                $scope.login = true;
                $scope.logOut = false;
                $scope.loggedInUser = '';
            });
    }
})();
