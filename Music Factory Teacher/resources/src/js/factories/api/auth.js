app.factory('apiAuth', ['$http', function ($http) {
	var baseUrl = "http://mf-live.a8hosting.com/";
	var apiAuth = {};

	apiAuth.login = function (creds) {
		creds.deviceId = 'test';
		creds.isBypass = false;
		return $http.post(baseUrl + "Custom/Services/A8_MusicFactoryService.svc/AuthenticateUser", creds)
	}

	return apiAuth;
}]);
