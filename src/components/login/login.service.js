(function(){
	'use strict';
		angular.module('nrf.app.login')
		.factory('loginService',loginService);

		loginService.$inject=['webApiService'];

		function loginService(webApiService){
			var service={
				authUser:authUser
			}
			return service;

			function authUser(userCredential){
				return webApiService.authUser(userCredential);
			}
		}
})();