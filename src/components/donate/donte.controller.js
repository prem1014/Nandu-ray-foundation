(function(){
	'use strict';
	angular.module('nrf.app.donate',[])
	.controller('DonateController',donateController);

	donateController.$inject=['$scope'];

	function donateController($scope){
		var donateCtrl=this;

		donateCtrl.makePayment=makePayment;
        donateCtrl.updateAmount=updateAmount;

		function makePayment(){
			if(!$scope.donate.$valid){
				$scope.donateFrmSubmitted=true;
			}
		}

		function updateAmount(){
			donateCtrl.amount=Number(donateCtrl.amount)
			console.log(donateCtrl.amount)
		}
	}
})();