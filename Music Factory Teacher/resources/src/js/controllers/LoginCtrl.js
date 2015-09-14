app.controller('LoginCtrl', ['apiAuth', 'apiLanguage', function(apiAuth, apiLanguage) {
	var vm = this,
		testEnvs = [
			"localhost",
			"music-factory.dev"
		];

	activate();

	vm.hasLoginError = false;
	vm.loginError = 'wew';
	vm.changeLanguage = changeLanguage;
	vm.login = login;
	vm.logout = logout;
	vm.labels = {};

	////////////////////
	function activate () {
		getAppLabels('en').then(function(response) {
			setLoginPageLabels(response.data.d);
		});
	}

	function changeLanguage(lang) {
		getAppLabels(lang).then(function(response) {
			setLoginPageLabels(response.data.d);
		});
	}

	function getAppLabels(lang) {
		return apiLanguage.getAppLabels(lang);
	}

	function setLoginPageLabels (data) {
		labels = {
			"selectLanguage": "SelectLanguageLabel",
			"signIn": "SignInLabel",
			"forgotPassword": "ForgotPasswordLabel",
			"username": "UsernameLabel",
			"password": "PasswordLabel",
			"login": "LoginLabel",
			"logoff": "LogOffUserLabel",
			"cancel": "CancelLabel",
			"invalidLogin": "InvalidLoginErrorMessage",
			"deactivatedUser": "DeactivatedUserErrorMessage",
			"userLoggedIn": "UserLoggedInErrorMessage",
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

	function getDeviceId () {
		if (testEnvs.indexOf(document.location.hostname) == -1) {
			return device.uuid;
		}

		return 'test';
	}

	function logout() {
		apiAuth.logout(vm.userCreds).then(function(response) {
			login(vm.userCreds);
		});
	}

	function login (creds) {
		$('.login-form form .preloader-log').show();
		creds.isBypass = false;
		creds.deviceId = getDeviceId();

		apiAuth.login(creds).then(function(response) {
			$('.login-form form .preloader-log').hide();
			var response = response.data.d;
			if (response.IsValid) {
				// Proceed class listing
				alert('logged in success')
			} else {
            	vm.hasLoginError = true;
				switch (response.ResponseCode) {
		            case 2: //UserNotFound
		            case 7: //Unknown
		            	vm.loginError = 'invalid';
		                break;
		            case 3: //UserLoggedFromDifferentIp
		            case 6: //UserLoggedFromDifferentComputer
		            case 9: //UserAlreadyLoggedIn
		            	vm.loginError = 'alreadyLoggedIn';
		            	vm.userCreds = creds;
		            	$('#alreadyloggedin').modal();
		                break;
		            case 99: //DeactivatedAccount
		            	vm.loginError = 'deactivated';
		                break;
		            default:
		                alert("Something went wrong. Please contact your system administrator.");
		                break;
				}
			}
		});
	};
}]);