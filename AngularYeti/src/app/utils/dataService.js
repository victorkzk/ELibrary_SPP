/**
 * Created by anton.charnou on 23.03.2016.
 */
(function () {
	'use strict';

	angular.module('YetiLibrary').factory('DataService', function ($cookies, $log, $resource, restUrl) {
		var vm = this;
		vm.data = {
			roles: null
		};

		vm.secureResources = $resource(restUrl + '/rest/users/roles', {}, {
			get: {method: 'GET', cache: false, isArray: true}
		});


		vm.getRolesFromServer = function () {
			vm.secureResources.get().$promise.then(function (response) {
				$log.log('GET /rest/user/roles returned: ', response);
				vm.data.roles = response;

			}).catch(function () {
				$log.log('Can\'t retrieve roles');
			});
		};
		return {
			setRoles: function (roles) {
				vm.data.roles = roles;
			},
			getData: function () {
				return vm.data;
			},
			getRolesFromServer: function () {
				vm.getRolesFromServer();
				return vm.data.roles;
			}
		};


	});
})();
