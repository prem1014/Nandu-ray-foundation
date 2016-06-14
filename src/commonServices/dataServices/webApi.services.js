(function(){
	'use strict',
	angular.module('nrf.app.webApi',[])
	.factory('webApiService',webApiService);

	webApiService.$inject=['$http'];

	function webApiService($http){
		var service={
			authUser:authUser,
			signUp:signUp,
			getUserRegReq:getUserRegReq
		}
		return service;

		function authUser(userCredentials){
			userCredentials=JSON.stringify(userCredentials);
			return $http({
				url:'http://localhost:51508//api/login',
				method:'POST',
				data:userCredentials,
				dataType:'json'
			})
		}

		function signUp(userDetails){
			return $http.post('http://localhost:51508//api/signUp',userDetails);
		}

		function getUserRegReq(){
			return $http.get('http://localhost:51508//api/signUp');
		}
	}
})();