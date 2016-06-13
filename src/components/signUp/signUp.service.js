(function(){
	'use strict';
	angular.module('nrf.app.signUp')
	.factory('signUpService',signUpService);

	signUpService.$inject=['webApiService'];

	function signUpService(webApiService){
		var service={
			signUp:signUp
		};

		return service;

		function signUp(userDetails){
			return webApiService.signUp(userDetails)
		}
	}
})();