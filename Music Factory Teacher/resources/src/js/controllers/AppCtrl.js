app.controller('AppCtrl', ['apiTeacher', function (apiTeacher) {
	var vm = this;
	vm.teacher = {};

	activate();

	////////////////////
	function activate () {
		apiTeacher.getDetails().then(function(response) {
			vm.teacher = response.data.d;
		});
	}
}]);