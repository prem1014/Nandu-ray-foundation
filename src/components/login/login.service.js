(function(){
	'use strict';
		angular.module('nrf.app.login')
		.factory('loginService',loginService);

		loginService.$inject=['$rootScope','$cookieStore','webApiService'];

		function loginService($rootScope,$cookieStore,webApiService){
			var service={
				authUser:authUser,
				setUserName:setUserName,
				clearCredentials:clearCredentials
			}
			return service;

			function authUser(userCredential){
			     return webApiService.authUser(userCredential)
			}

			function setUserName(userName){
				$rootScope.userDetails={
					userName:userName
				}
				$cookieStore.put('userDetails',$rootScope.userDetails );
			}

			function clearCredentials(){
				$rootScope.userDetails={};
				$cookieStore.remove('userDetails');
			}
		}
})();