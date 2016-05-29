(function () {
	'use strict';

	angular
			.module('YetiLibrary')
			.controller('LoginController', LoginController);

	/** @ngInject */
	function LoginController($state, LoginService, $log, errorHandler, DataService) {
		var vm = this;

		vm.credentials = {
			username: null,
			password: null
		};


		vm.login = function () {
			LoginService.login(vm.credentials.username, vm.credentials.password,
					function (response) {
						DataService.getRolesFromServer();
						$state.go("home");
						$log.info('The user has been successfully logged in! ', response);
						
					}, function (response) {
						$log.error('Something went wrong while trying to login... ', response);
						DataService.setRoles([]);
						errorHandler.handle(response);
					});
		};
		
	}
})();

