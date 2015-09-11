var app = angular.module('musicFactory', ['ngRoute']);

app.config(function ($routeProvider) {
	$routeProvider
		.when('/', {
			templateUrl: './views/mf-login.html',
			controller: 'LoginCtrl as ctrl'
		})
		.when('/home', {
			templateUrl: './views/mf-myclasses.html',
			controller: 'ClassesCtrl as ctrl'
		});
});

var apiBaseUrl = "http://mf-live.a8hosting.com/Custom/Services/A8_MusicFactoryService.svc/";
