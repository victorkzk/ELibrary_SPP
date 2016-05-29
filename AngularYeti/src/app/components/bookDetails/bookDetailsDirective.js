(function () {
	'use strict';

	angular
			.module('YetiLibrary')
			.directive('bookDetails', bookEdit);

	/** @ngInject */
	function bookEdit() {
		return {
			restrict: 'E',
			templateUrl: 'app/components/bookDetails/bookDetails.html'
		};
	}

})();
