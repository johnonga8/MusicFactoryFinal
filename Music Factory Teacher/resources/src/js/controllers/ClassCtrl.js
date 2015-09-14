app.controller('ClassCtrl', ['apiClass', '$stateParams', function (apiClass, $stateParams) {
	var vm = this;

	vm.class = {};

	activate();

	////////////////////
	function activate () {
		// var id = $stateParams.classId;
		var id = "6c227db3-986e-67b9-8ff0-ff0000d15b77"; // Mocked
		apiClass.getDetails(id).then(function(response) {
			vm.class = response.data.d;
			console.log(vm.class);
		});
	}
}]);