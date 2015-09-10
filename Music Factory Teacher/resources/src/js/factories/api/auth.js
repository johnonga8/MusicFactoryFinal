app.factory('apiAuth', ['$http', function ($http) {
	var apiAuth = {};

	apiAuth.login = function (creds) {
		return $http.post(apiBaseUrl + "AuthenticateUser", creds)
	}

	apiAuth.logout = function (creds) {
		return $http.post(apiBaseUrl + "LogoutUser", creds)
	}

	return apiAuth;
}]);
