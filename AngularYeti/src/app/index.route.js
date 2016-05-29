(function () {
	'use strict';

	angular
			.module('YetiLibrary')
			.config(routerConfig);

	/** @ngInject */
	function routerConfig($stateProvider, $urlRouterProvider) {
		$stateProvider
				.state('home', {
					url: '/',
					templateUrl: 'app/pages/home/home.html'
				})
				.state('book', {
					abstract: true,
					url: '/book',
					template: '<ui-view/>'
				})
				.state('book.edit', {
					templateUrl: 'app/components/bookEdit/bookEdit.html',
					url: '/edit/:id'
				})
				.state('book.details', {
					url: '/details/:id',
					templateUrl: 'app/components/bookDetails/bookDetails.html'
				})
				.state('login', {
					url: '/login',
					templateUrl: 'app/pages/login/login.html'
				})
				.state(' ', {
					url: '/add',
					templateUrl: 'app/pages/addBook/addBook.html'
				});

		$urlRouterProvider.otherwise('/');
	}

})();
