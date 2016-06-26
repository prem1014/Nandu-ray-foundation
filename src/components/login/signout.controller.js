(function(){
	'use strict';
	angular.module('nrf.app.login')
	.controller('SignOutController',signOutController);

	signOutController.$inject=['$scope','$location'];

	function signOutController($scope,$location){
		$location.path('/login');
        $scope.$emit('signOut', 'sign out event fired');
	}
})();