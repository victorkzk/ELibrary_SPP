(function () {
	'use strict';

	angular
			.module('YetiLibrary')
			.controller('NavbarController', NavbarController);

	/** @ngInject */
	function NavbarController(DataService, LoginService, $state, $log) {
		var vm = this;
		vm.data = DataService.getData();

		vm.logout = function () {
			LoginService.logout(function () {
				vm.credentials = {username: '', password: ''};
				$log.info('The user has been logged out!');
				DataService.setRoles([]);
				$state.go('login');

			}, function (data, status, headers, config) {

				$log.error('Something went wrong while trying to logout... ', data, status, headers, config);
				DataService.setRoles(null);
			});
		};
	}
})();
