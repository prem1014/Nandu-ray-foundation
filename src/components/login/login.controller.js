(function(){
	'use strict';
	angular.module('nrf.app.login',['nrf.app.webApi'])
	.controller('LoginController',loginController)

	loginController.$inject=['$scope','loginService'];

	function loginController($scope,loginService){
		var loginCtrl=this;

		loginCtrl.login=login;

		function login(){
			var userCredential={
				userId:loginCtrl.userName,
				 password:loginCtrl.password
			}

			loginService.authUser(userCredential)
			.then(function(data){
				console.log(data);
			})
		}
	}
})();