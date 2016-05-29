(function () {
	'use strict';

	angular
			.module('YetiLibrary')
			.controller('BookDetailsController', BookDetailsController);

	/** @ngInject */
	function BookDetailsController($stateParams, BookService, errorHandler, $log) {
		var vm = this;
		vm.book = {};

		BookService.get($stateParams.id).then(function (response) {
			$log.log('GET /rest/books returned: ', response);
			vm.book = response;

		}).catch(function (response) {
			errorHandler.handle(response);
		});

	}
})();
