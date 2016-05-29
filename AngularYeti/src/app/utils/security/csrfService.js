(function () {
	'use strict';


	angular.module('YetiLibrary').factory('Csrf', function ($http, $q, Cookies, $log) {

		return {
			addResourcesCsrfToHeaders: function (optionsFunction, headers) {
				var result = $q.defer();

				if (!headers) {
					headers = {};
				}

				optionsFunction().$promise.then(function (response) {
					$log.log('Obtained a CSRF token in a cookie', response);

					// Extract the CSRF token
					var csrfToken = Cookies.getFromDocument($http.defaults.xsrfCookieName);
					$log.log('Extracted the CSRF token from the cookie', csrfToken);

					// Add CSRF to headers
					headers[$http.defaults.xsrfHeaderName] = csrfToken;

					result.resolve(headers);

				}).catch(function (response) {
					result.reject(response);
				});

				return result.promise;
			}
		};
	});
})();