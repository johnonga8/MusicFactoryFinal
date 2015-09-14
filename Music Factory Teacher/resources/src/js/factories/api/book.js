app.factory('apiBook', ['$http', function ($http) {
	var apiBook = {};

	apiBook.getAll = function () {
		return $http.post(apiBaseUrl + "GetAllBooks");
	}

	apiBook.findKinderBook = function (params) {
		return $http.post(apiBaseUrl + "GetKinderBookById", params);
	}

	apiBook.findKinderBook = function (params) {
		return $http.post(apiBaseUrl + "GetKinderBookById", params);
	}

	apiBook.findInfantBook = function (params) {
		return $http.post(apiBaseUrl + "GetInfantBookById", params);
	}

	return apiBook;
}]);
