app.factory('apiLabels', ['$http', function ($http) {
	var apiLabels = {
		getAppLabels: getAppLabels
	}

	return apiLabels;

	function getAppLabels (lang) {
		return $http.post(apiBaseUrl + 'GetTeacherAppLabels', {cultureName: lang});
	}
}]);