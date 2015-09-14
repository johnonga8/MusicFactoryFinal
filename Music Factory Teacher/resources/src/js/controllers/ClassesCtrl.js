app.controller('ClassesCtrl', ['apiTeacher' , 'apiLabels' ,'sessionService', function (apiTeacher, apiLabels, sessionService) {
	var vm = this;
	vm.session = sessionService.getSession();
	vm.teacher = {};
	vm.labels = {};

	vm.currentUser = {
		username: vm.session.currentUser
	};

	activate();

	////////////////////
	function activate () {
		apiLabels.getAppLabels(sessionService.getSession('language')).then(function(response) {
			setLabels(response.data.d);
		});
		apiTeacher.getDetails(vm.currentUser).then(function(response) {
			vm.teacher = response.data.d;
			console.log(vm.teacher);
			sessionService.setSession('profileId', vm.teacher.ProfileId);
		});
	}

	function getAppLabels(lang) {
		return apiLanguage.getAppLabels(lang);
	}

	function setLabels (data) {
		labels = {
			"welcomeMessage": "UserWelcomeLabel",
			"books": "Menu_BooksLabel",
			"signOut": "SignOutLabel",
		};

		angular.forEach(labels, function(val, key) {
			vm.labels[key] = getLabelValue(data, val);
		});
	}

	function getLabelValue(data, key) {
		return _.result(_.find(data, function (label) {
			return label.key == key;
		}), 'value');
	}
}]);
