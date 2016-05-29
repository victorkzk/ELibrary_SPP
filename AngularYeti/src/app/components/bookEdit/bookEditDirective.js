(function () {
	'use strict';

	angular
			.module('YetiLibrary')
			.directive('bookEdit', bookEdit);

	/** @ngInject */
	function bookEdit() {
		return {
			restrict: 'E',
			templateUrl: 'app/components/bookEdit/bookEdit.html'
		};
	}

})();
