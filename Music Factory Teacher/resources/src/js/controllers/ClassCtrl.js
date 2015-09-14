app.controller('ClassCtrl', ['apiClass', function (apiClass) {
	var vm = this;

	vm.class = {};

	activate();

	////////////////////
	function activate () {
		var id = 1;
		apiClass.getDetails(id).then(function(response) {
			vm.class = response.data.d;
		});
	}
}]);