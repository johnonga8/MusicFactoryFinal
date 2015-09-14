app.factory('apiTeacher', ['$http', function ($http) {
	var apiTeacher = {};

	apiTeacher.getDetails = function (creds) {
		return $http.post(apiBaseUrl + 'GetTeacherDetails', creds);
	};

	apiTeacher.getAppLabels = function (creds) {
		return $http.post(apiBaseUrl + 'GetTeacherAppLabels', creds);
	};

	return apiTeacher;
}]);
