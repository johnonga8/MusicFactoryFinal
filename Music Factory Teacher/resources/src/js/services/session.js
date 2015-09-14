app.service('sessionService', function ($http) {
	var session = {
		currentUser: 'TeacherAppUser4', // Mocked for testing
		profileId: '',
		deviceId: ''
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
