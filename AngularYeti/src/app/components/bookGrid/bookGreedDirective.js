(function () {
	'use strict';

	angular
			.module('YetiLibrary')
			.directive('bookGrid', bookGrid);

	/** @ngInject */
	function bookGrid() {
		return {
			restrict: 'E',
			templateUrl: 'app/components/bookGrid/bookGrid.html',
			link: function () {
				angular.element(document).foundation('reveal', 'reflow');

				angular.element('#animated').addClass('animated pulse');

				angular.element('#close-modal-button').click(function() {
					angular.element('#delete-modal').foundation('reveal', 'close');
				});

				var elem = angular.element('.malarkey')[0];
				var opts = {
					typeSpeed: 40
				};


				malarkey(elem, opts).type('You can actually find your favorite book there.')
			}
		};
	}

})();
