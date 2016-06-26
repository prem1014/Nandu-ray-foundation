(function(){
	'use strict';
	angular.module('nrf.app.home',[])
	.controller('LandingController',landingController);

	landingController.$inject=['$scope','webApiService'];

	function landingController($scope,webApiService){
		var landingCtrl=this;

		activate();

        landingCtrl.submitProgram=submitProgram;
        landingCtrl.approveReq=approveReq;
        landingCtrl.rejectReq=rejectReq;

        function submitProgram(){
        	if(!$scope.createProgram.$valid){
        		$scope.createProgramFrmSubmitted=true;
        	}
        }

        function approveReq(){
        	
        }

        function rejectReq(){

        }
        
		function activate(){
			getUserRegReq();
			generateSubList();
		}

		function getUserRegReq(){
			webApiService.getUserRegReq()
			.then(function(data){
				landingCtrl.userDetails=data.data;
			})
		}

		function generateSubList(){
			landingCtrl.subject=[
			{
				code:'M01',
				name:'Math'
			},
			{
				code:'Sc01',
				name:'Science'
			},
			{
				code:'Ssc01',
				name:'Social Science'
			},
			{
				code:'Hin01',
				name:'Hindi'
			},
			{
				code:'Eng01',
				name:'English'
			}
			]

			landingCtrl.selectedSub=landingCtrl.subject[0].code;
		}
	}
})();