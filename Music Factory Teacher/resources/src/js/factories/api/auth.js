app.factory('apiAuth', ['$http', function ($http) {
	var apiAuth = {};

	apiAuth.login = function (creds) {
		return $http.post(apiBaseUrl + "AuthenticateUser", creds)
	}

	return apiAuth;
}]);
