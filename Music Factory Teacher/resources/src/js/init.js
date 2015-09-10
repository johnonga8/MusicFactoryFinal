var app = angular.module('musicFactory', ['ngRoute']);

app.config(function ($routeProvider) {
	$routeProvider
		.when('/', {
			templateUrl: './views/mf-login.html',
			controller: 'LoginCtrl as ctrl'
		});
});