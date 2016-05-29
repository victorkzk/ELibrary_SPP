(function () {
	'use strict';

	angular
			.module('YetiLibrary')
			.directive('yetiNavbar', bookNavbar);

	/** @ngInject */
	function bookNavbar() {
		return {
			restrict: 'E',
			templateUrl: 'app/components/navbar/navbar.html'
		};
	}

})();
