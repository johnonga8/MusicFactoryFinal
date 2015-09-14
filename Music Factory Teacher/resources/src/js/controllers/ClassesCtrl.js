app.controller('ClassesCtrl', ['apiTeacher' , 'sessionService', function (apiTeacher, sessionService) {
	var vm = this;
	vm.session = sessionService.getSession();
	vm.teacher = {};

	vm.currentUser = {
		username: vm.session.currentUser
	};

	activate();

	////////////////////
	function activate () {
		apiTeacher.getDetails(vm.currentUser).then(function(response) {
			vm.teacher = response.data.d;
			sessionService.setSession('profileId', vm.teacher.ProfileId);
		});
	}
}]);