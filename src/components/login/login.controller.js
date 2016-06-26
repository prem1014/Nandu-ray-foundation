(function(){
	'use strict';
	angular.module('nrf.app.login',['nrf.app.webApi'])
	.controller('LoginController',loginController)

	loginController.$inject=['$scope','$location','loginService'];

	function loginController($scope,$location,loginService){
		var loginCtrl=this;

		activate();

		loginCtrl.login=login;

		function login(){
			var userCredential={
				userId:loginCtrl.userName,
				 password:loginCtrl.password
			}

			if($scope.loginForm.$valid){
			loginService.authUser(userCredential)
			.success(function(userName){
				loginService.setUserName(userName)
				$location.path('userHome')
				$scope.$emit('loggedin','user logged in');
			})
			}
			else{
				$scope.loginFrmSubmitted=true;
			}

			//$scope.$emit('loggedInUser',loginCtrl.userName);
			//$location.path('userHome');
		}

		function activate(){
			loginService.clearCredentials();
		}
	}
})();