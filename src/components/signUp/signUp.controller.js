(function(){
	'use strict';
	angular.module('nrf.app.signUp',[])
	.controller('SignUpController',signUpController);

	signUpController.$inject=['$scope','signUpService'];

	function signUpController($scope,signUpService){
		var signUpCtrl=this;

		signUpCtrl.signUp=signUp;

		function signUp(){
			var userDetails={
				userId:signUpCtrl.email,
				password:signUpCtrl.password,
				userName:signUpCtrl.userName,
				profession:signUpCtrl.profession,
				status:'pending'
			};
			signUpService.signUp(userDetails)
			.then(function(data){
				console.log(data.data);
				if(data.data===1){
					 swal('You have been registered. Go to login page to get logged in');
				}
			})
		}
	}
})();