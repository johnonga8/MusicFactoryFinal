app.controller('LoginCtrl', ['apiAuth', function(apiAuth) {
	var vm = this;

	vm.login = function (creds) {
		apiAuth.login(creds).then(function(response) {
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