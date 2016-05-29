(function () {
	'use strict';

	angular.module('YetiLibrary').factory('errorHandler', function ($log, $state, toastr) {

		return {
			handle: function (response) {

				switch (response.status) {
					case 401:
						$log.error('You need to login first!');
						toastr.error('You need to login first!');
						$state.go('login');
						break;
					case 403:
						$log.error('You don\'t have permissions!');
						toastr.error('You don\'t have permissions!');
						$state.go('home');
						break;
					default:
						$log.error('Something went wrong...', response);
						toastr.error('Something went wrong...');
				}

			}
		};
	});
})();