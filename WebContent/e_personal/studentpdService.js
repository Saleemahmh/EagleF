/**
 * 
 */
app.factory('studentpdService', function($http) {
	console.log('starting studentpdService')
	var BASE_URL = "http://localhost:8080/rest/eagle"

	var studentpdService = this;
	studentpdService.fetchAllStudentpd = function() {
		console.log('entering getAllStudentpd')
		return $http.get(BASE_URL + "/getAllStudentpd").then(
				function(response) {
					return response.data
				}, function(response) {
					console.error('Error while getting all Student Personal Details')
					return response.data
				});
	};

	studentpdService.addStudentpd = function(studentpd) {
		console.log('entering addStudentpd')
		return $http.post(BASE_URL + "/addStudentpd", studentpd).then(
				function(response) {
					return response.data
				}, function(response) {
					console.error('Error while Creating Studentpds')
					return response.data
				});
	};

	studentpdService. updateStudentpd = function(studentId, studentpd) {
		console.log('entering update studentId : ' + studentId)
		console.log('entering update Student :' + studentpd)
		console.log(BASE_URL + "/updateStudentpd/", studentId, studentpd)
		return $http.put(BASE_URL + "/updateStudentpd/" + studentId, studentpd);
	};

	studentpdService.deleteStudentpd = function(studentId) {
		console.log('entering service delete')
		return $http['delete'](BASE_URL + "/deleteStudentpd/" + studentId).then(
				function(response) {
					console.log(response.status)
					return response.status
				}, function() {
					console.log(response.status)
				})
	};


	studentpdService.getStudentpdById = function(studentId) {
		return $http.get(BASE_URL + "/getStudentpdbyID/" + studentId)
	};

	return studentpdService;

})
	

	