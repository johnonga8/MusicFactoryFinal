app.factory('apiLanguage', ['$http', function ($http) {
	var apiLanguage = {
		getAppLabels: getAppLabels
	}

	return apiLanguage;

	function getAppLabels (lang) {
		return $http.post(apiBaseUrl + 'GetTeacherAppLabels', {cultureName: lang});
	}
}]);