/**
 * Created by anton.charnou on 18.03.2016.
 */
(function () {
	'use strict';

	angular
			.module('YetiLibrary')
			.directive('login', Login);

	/** @ngInject */
	function Login() {
		var directive = {
			restrict: 'E',
			templateUrl: 'app/components/login/login.html'
		};

		return directive;
	}

})();
