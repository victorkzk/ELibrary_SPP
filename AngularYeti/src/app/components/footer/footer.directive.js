(function () {
	'use strict';

	angular
			.module('YetiLibrary')
			.directive('yetiFooter', yetiFooter);

	/** @ngInject */
	function yetiFooter() {
		return {
			restrict: 'E',
			templateUrl: 'app/components/footer/footer.html'
		};
	}

})();
