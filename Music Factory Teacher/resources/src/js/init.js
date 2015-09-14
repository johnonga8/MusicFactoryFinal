var app = angular.module('musicFactory', ['ui.router']);
	
app.config(function ($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.otherwise("/login");

	$stateProvider
		.state('login', {
			url: "/login",
			templateUrl: './views/mf-login.html',
			controller: 'LoginCtrl as ctrl'
		})
		.state('home', {
			url: "/home",
			templateUrl: './views/mf-classlisting.html',
			controller: 'ClassesCtrl as ctrl'
		});
});

var apiBaseUrl = "http://mf-live.a8hosting.com/Custom/Services/A8_MusicFactoryService.svc/";
