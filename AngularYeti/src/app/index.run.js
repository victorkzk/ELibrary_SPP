(function () {
	'use strict';

	angular
			.module('YetiLibrary')
			.run(initFoundation);

	/** @ngInject */
	function initFoundation($rootScope, DataService, $state) {
		angular.element(document).foundation('reflow');

		var callback =
				$rootScope.$on('$viewContentLoaded', function () {
					angular.element(document).foundation('reflow');
				});
		$rootScope.$on('$destroy', callback);

		var roles = DataService.getRolesFromServer();
		if (roles) {
			$state.go('home')
		}
		else {
			$state.go('login')
		}


	}

})();
