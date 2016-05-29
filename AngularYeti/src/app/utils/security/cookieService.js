(function() {
	'use strict';

	angular.module('YetiLibrary').factory('Cookies', function ($cookies) {

		return {
			/**
			 * Fetches a cookie value directly from the DOM document.
			 * @param cookieKey The key of the cookie value to fetch.
			 * @returns {*} Either the cookie value or "null" if no value matching the specfied key could be found.
			 */
			getFromDocument: function (cookieKey) {
				if (!cookieKey) {
					return null;
				}
				return $cookies.get(cookieKey)
			}
		};
	});
})();