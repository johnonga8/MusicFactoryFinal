app.controller('LoginCtrl', ['apiAuth', 'apiLanguage', function(apiAuth, apiLanguage) {
	var vm = this,
		testEnvs = [
			"localhost",
			"music-factory.dev"
		];

	activate();

	vm.changeLanguage = changeLanguage;
	vm.login = login;
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
			"login": "LoginLabel"
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

	function login (creds) {
		$('.login-form form .preloader-log').show();
		creds.isBypass = false;
		creds.deviceId = getDeviceId();

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