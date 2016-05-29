(function () {
	'use strict';

	angular
			.module('YetiLibrary')
			.controller('BookEditController', BookController);

	/** @ngInject */
	function BookController($stateParams, $state, $log, BookService, errorHandler) {
		var vm = this;
		vm.book = {};
		vm.date = new Date();

		BookService.get($stateParams.id).then(function (response) {
			$log.log('GET /rest/books returned: ', response);
			vm.book = response;
			vm.date = new Date(response.date);

		}).catch(function (response) {
			errorHandler.handle(response);
		});
		vm.update = function () {
			vm.book.date = vm.date;
			BookService.update(vm.book).then(function (response) {
				$log.log('PUT /rest/books returned: ', response);

			}).catch(function (response) {
				errorHandler.handle(response);
			});
			$state.go('home');
		};

	}
})();
