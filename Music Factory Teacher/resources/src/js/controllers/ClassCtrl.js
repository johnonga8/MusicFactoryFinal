app.controller('ClassCtrl', ['apiClass', '$stateParams', function (apiClass, $stateParams) {
	var vm = this;

	vm.class = {};

	activate();

	////////////////////
	function activate () {
		var id = $stateParams.classId;
		apiClass.getDetails(id).then(function(response) {
			vm.class = response.data.d;
		});
	}
}]);