(function(){
	angular.module('app.core')
	.run(runAppCore);

runAppCore.$inject=['$rootScope', '$location']
	function runAppCore($rootScope, $location){
		        // keep user logged in after page refresh
	}
})();