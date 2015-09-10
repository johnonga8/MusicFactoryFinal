app.factory('apiAuth', ['$http', function ($http) {
	var baseUrl = "http://mf-live.a8hosting.com/";
	var apiAuth = {};

	apiAuth.login = function (creds) {
		return $http.post(baseUrl + "Custom/Services/A8_MusicFactoryService.svc/AuthenticateUser", creds)
	}

	return apiAuth;
}]);
