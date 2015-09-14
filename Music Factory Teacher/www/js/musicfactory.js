var app = angular.module('musicFactory', ['ui.router']);
	
app.config(function ($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.otherwise("/login");

	$stateProvider
		.state('login', {
			url: "/login",
			templateUrl: './views/mf-login.html',
			controller: 'LoginCtrl as ctrl',
		})
		.state('home', {
			url: "/home",
			templateUrl: './views/mf-classlisting.html',
			controller: 'ClassesCtrl as ctrl'
		})
		.state('class', {
			url: "/class",
			templateUrl: './views/mf-individualclass.html',
			controller: 'ClassCtrl as ctrl',
			params: {
				classId: null
			}
		});
});

var apiBaseUrl = "http://musicfactory.a8hosting.com/Custom/Services/A8_MusicFactoryService.svc/";

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
app.controller('ClassesCtrl', ['apiTeacher' , 'apiLabels', 'apiAuth' ,'sessionService', '$state', function (apiTeacher, apiLabels, apiAuth, sessionService, $state) {
	var vm = this;
	vm.logout = logout;
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

	function logout() {
		apiAuth.logout(vm.currentUser).then(function(response) {
			// show loading screen
			// clear session
			$state.go("login");
		});
	}
}]);

app.controller('LoginCtrl', ['apiAuth', 'apiLabels', 'sessionService', '$state', function(apiAuth, apiLanguage, sessionService, $state) {
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
			sessionService.setSession('language', lang);
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
        	$('#alreadyloggedin').modal('hide');
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
				sessionService.setSession('currentUser', creds.username);
				sessionService.setSession('deviceId', creds.deviceId);
				
				$state.go('home');
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
		            	$('#alreadyloggedin').modal('show');
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
app.service('sessionService', function ($http) {
	var session = {
		currentUser: 'TeacherAppUser4', // Mocked for testing
		profileId: '',
		deviceId: '',
		language: 'en',
	};

	var setSession = function (obj, value) {
		session[obj] = (typeof value === 'undefined' ? '' : value);
	}

	var getSession = function (obj) {
		if (typeof obj === 'undefined') 
			return session;

		return session[obj];	
	}

	return {
		setSession: setSession,
		getSession: getSession
	};
});

app.factory('apiAuth', ['$http', function ($http) {
	var apiAuth = {};

	apiAuth.login = function (creds) {
		return $http.post(apiBaseUrl + "AuthenticateUser", creds)
	}

	apiAuth.logout = function (creds) {
		return $http.post(apiBaseUrl + "LogoutUser", creds)
	}

	return apiAuth;
}]);

app.factory('apiBook', ['$http', function ($http) {
	var apiBook = {};

	apiBook.getAll = function () {
		return $http.post(apiBaseUrl + "GetAllBooks");
	}

	apiBook.findKinderBook = function (params) {
		return $http.post(apiBaseUrl + "GetKinderBookById", params);
	}

	apiBook.findKinderBook = function (params) {
		return $http.post(apiBaseUrl + "GetKinderBookById", params);
	}

	apiBook.findInfantBook = function (params) {
		return $http.post(apiBaseUrl + "GetInfantBookById", params);
	}

	return apiBook;
}]);

app.factory('apiClass', ['$http', function($http) {
	var apiClass = {
		getDetails: getDetails
	};

	return apiClass;

	function getDetails(id) {
		return $http.post(apiBaseUrl + 'GetClassDetails', {classId: id});
	}
}]);
app.factory('apiLabels', ['$http', function ($http) {
	var apiLabels = {
		getAppLabels: getAppLabels
	}

	return apiLabels;

	function getAppLabels (lang) {
		return $http.post(apiBaseUrl + 'GetTeacherAppLabels', {cultureName: lang});
	}
}]);
app.factory('apiLesson', ['$http', function ($http) {
	var apiLesson = {
		complete: complete
	}

	return apiLesson;

	function complete (params) {
		return $http.post(apiBaseUrl + 'CompleteLesson', params);
	}
}]);
app.factory('apiTeacher', ['$http', function ($http) {
	var apiTeacher = {};

	apiTeacher.getDetails = function (creds) {
		return $http.post(apiBaseUrl + 'GetTeacherDetails', creds);
	};

	apiTeacher.getAppLabels = function (creds) {
		return $http.post(apiBaseUrl + 'GetTeacherAppLabels', creds);
	};

	return apiTeacher;
}]);
