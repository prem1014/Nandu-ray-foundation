(function(){
	'use strict';
	angular.module('nrf.app.home',[])
	.controller('LandingController',landingController);

	landingController.$inject=['$scope','webApiService'];

	function landingController($scope,webApiService){
		var landingCtrl=this;

		activate();

		function activate(){
			getUserRegReq();
		}

		function getUserRegReq(){
			webApiService.getUserRegReq()
			.then(function(data){
				landingCtrl.userDetails=data.data;
			})
		}
	}
})();