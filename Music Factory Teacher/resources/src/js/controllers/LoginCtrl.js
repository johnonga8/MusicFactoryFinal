app.controller('LoginCtrl', ['apiAuth', function(apiAuth) {
	var vm = this;

	var testEnvs = [
		"localhost",
		"music-factory.dev"
	]

	vm.getDeviceId = function () {
		if (testEnvs.indexOf(document.location.hostname) == -1) {
			return device.uuid;
		}

		return 'test';
	}

	vm.login = function (creds) {
		$('.login-form form .preloader-log').show();
		creds.isBypass = false;
		creds.deviceId = vm.getDeviceId();

		apiAuth.login(creds).then(function(response) {
			$('.login-form form .preloader-log').hide();
			var response = response.data.d;
			if (response.isValid) {
				// Proceed class listing
			} else {
				switch (response.ResponseCode) {
		            case 2: //UserNotFound
		            case 7: //Unknown
		            	alert ('Error on log in.');
		                break;
		            case 3: //UserLoggedFromDifferentIp
		            case 6: //UserLoggedFromDifferentComputer
		            case 9: //UserAlreadyLoggedIn
		            	alert ('User already logged in.');
		                break;
		            case 99: //DeactivatedAccount
		            	alert ('User is deactivated.');
		                break;
		            default:
		                alert("Something went wrong. Please contact your system administrator.");
		                break;
				}
			}
		});
	};
}]);