app.controller('ClassesCtrl', ['apiClass', function (apiClass) {
	var vm = this;
	vm.teacher = {};

	activate();

	////////////////////
	function activate () {
		apiClass.getDetails().then(function(response) {
			vm.teacher = response.data.d;
		});
	}
}]);