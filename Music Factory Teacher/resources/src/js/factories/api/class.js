app.factory('apiClass', ['$http', function($http) {
	var apiClass = {
		getDetails: getDetails
	};

	return apiClass;

	function getDetails(id) {
		return $http.post(apiBaseUrl + 'GetClassDetails', {classId: id});
	}
}]);