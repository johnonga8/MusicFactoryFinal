app.factory('apiClass', ['$http', function($http) {
	var apiClass = {
		getDetails: getDetails
	};

	return apiClass;

	function getDetails(params) {
		return $http.post(apiBaseUrl + 'GetClassDetails', params);
	}
}]);