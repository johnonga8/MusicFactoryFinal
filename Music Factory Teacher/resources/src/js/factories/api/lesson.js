app.factory('apiLesson', ['$http', function ($http) {
	var apiLesson = {
		complete: complete
	}

	return apiLesson;

	function complete (params) {
		return $http.post(apiBaseUrl + 'CompleteLesson', params);
	}
}]);