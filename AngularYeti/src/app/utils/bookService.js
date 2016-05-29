(function () {
	'use strict';

	angular
			.module('YetiLibrary')
			.factory('BookService', BookService);

	/** @ngInject */
	function BookService($resource, restUrl, Csrf, $http, $log) {
		var vm = this;
		vm.secureResources = function (headers) {

			if (headers) {
				return $resource(restUrl + '/rest/books/:id', {id: "@id"}, {
					put: {method: 'PUT', headers: headers, isArray: false},
					post: {method: 'POST', headers: headers, isArray: false},
					delete: {method: 'DELETE', headers: headers, isArray: false}
				});
			} else {
				return $resource(restUrl + '/rest/books/:id', {id: "@id"}, {
					get: {method: 'GET', cache: false, isArray: false},
					options: {method: 'OPTIONS', cache: false}
				});
			}
		};

		vm.update = function(book) {
			return Csrf.addResourcesCsrfToHeaders(vm.secureResources().options, $http.defaults.headers.put).then(function (headers) {
				$log.log('PUT /rest/books ');
				return vm.secureResources(headers).put(book).$promise
			});
		};

		vm.delete = function(id) {
			return Csrf.addResourcesCsrfToHeaders(vm.secureResources().options, $http.defaults.headers.delete).then(function (headers) {
				$log.log('DELETE /rest/books ');
				return vm.secureResources(headers).delete({id: id}).$promise
			});
		};

		vm.get = function(id) {
			return vm.secureResources().get({id: id}).$promise
		};

		vm.getPage = function(page, size) {
			$log.log('GET /rest/books');
			return $resource(restUrl + '/rest/books', {}, {
				get: {method: 'GET', params: {
					page: page,
					size: size
				}},
				options: {method: 'OPTIONS'}
			}).get().$promise;
		};

		vm.add = function(book) {
			return Csrf.addResourcesCsrfToHeaders(vm.secureResources().options, $http.defaults.headers.post).then(function (headers) {
				$log.log('POST /rest/books ');
				return vm.secureResources(headers).post(book).$promise
			});
		};

		return {
			update: vm.update,
			get: vm.get,
			delete: vm.delete,
			add: vm.add,
			getPage: vm.getPage
		}
	}

})();
