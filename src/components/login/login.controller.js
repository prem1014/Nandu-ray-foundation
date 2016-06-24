(function(){
	'use strict';
	angular.module('nrf.app.login',['nrf.app.webApi'])
	.controller('LoginController',loginController)

	loginController.$inject=['$scope','$location','loginService'];

	function loginController($scope,$location,loginService){
		var loginCtrl=this;

		loginCtrl.login=login;

		function login(){
			var userCredential={
				userId:loginCtrl.userName,
				 password:loginCtrl.password
			}

		/*	loginService.authUser(userCredential)
			.then(function(data){
				$location.path('login')
				$scope.$emit('loggedInUser',data.data);
			})*/
			$scope.$emit('loggedInUser',loginCtrl.userName);
			$location.path('userHome');
		}
	}
})();