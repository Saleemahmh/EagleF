/**
 * 
 */
app.factory('studentService', function($http) {
	console.log('starting studentService')
	var BASE_URL = "http://localhost:8090/rest/eagle"

	var studentService = this;
	studentService.fetchAllStudentpd = function() {
		console.log('entering getAllStudentpd')
		return $http.get(BASE_URL + "/getAllStudentpd").then(
				function(response) {
					return response.data
				}, function(response) {
					console.error('Error while getting all Student Personal Details')
					return response.data
				});
	};
	

	studentService.fetchAllStudentsd=function(){
		console.log('get all Student syllabus details')
		return $http.get(BASE_URL + "/getAllStudentsd").then(function(response){
			return response.data;
		},function(response){
			console.log('Error while getting Syllabus details')
			return response.data		
			});
	};
	studentService.getStudentImg=function(){
		console.log('Img Service')
		return $http.get(BASE_URL + "/student").then (function(response){
			console.log(response)
			return response.data;
		},function(response){
			console.log('Error')
			return response.data;
		});
	};
	studentService.getImageUrl=function(studentId){
		console.log('Img Url Service')
		return $http.get(BASE_URL+"/student/" + studentId).then(function(response){
			console.log(response)
			return response.data;
		},function(response){
			console.log(response)
			return response.data;
		})
	}
	studentService.addStudentpd = function(studentpd) {
		console.log('entering addStudentpd')
		return $http.post(BASE_URL + "/addStudentpd", studentpd).then(
				function(response) {
					return response.data
				}, function(response) {
					console.error('Error while Creating Studentpds')
					return response.data
				});
	};
	
	studentService.addStudentsd=function(studentsd){
		console.log('adding student syllabus details')
		return $http.post(BASE_URL + "/addStudentsd",studentsd).then(
				function(response){
			return response.data
		},function(response){
			console.data('Error creating Student Syllabus details')
			return response.data
		});
	};
	
	studentService.updateStudentpd = function( studentId,studentpd) {
		console.log('entering update : ' + studentId)
		console.log('entering update  :' + studentpd)
		console.log(BASE_URL +"/updateStudentpd?studentId=" + studentId, studentpd)
		return $http.put(BASE_URL+"/updateStudentpd?studentId=" +studentId, studentpd).then(
				function(response) {
					return response.data
				}, function(errorResponse) {
					console.error('Error while Updating')
					return errorResponse.data
				});
	};

	studentService.updateStudentsd=function(studentId,studentsd){
		console.log ('Updating :'+ studentId)
		console.log('Updating:'+ studentsd)
		console.log(BASE_URL+"/updateStudentsd?studentId"+ studentId,studentsd)
		return $http.put(BASE_URL+"/updateStudentsd?studentId"+ studentId,studentsd).then(
				function(response){
					return response.data
				},function(errorResponse){
					console.error('Error in Updating')
					return errorResponse.data
				});
	};
	studentService.deleteStudentpd = function(studentId) {
		console.log('entering service delete')
		return $http['delete'](BASE_URL + "/deleteStudentpd/" + studentId).then(
				function(response) {
					console.log(response.status)
					return response.status
				}, function() {
					console.log(response.status)
				})
	};
	studentService.deleteStudentsd = function(studentId) {
		console.log('entering service delete')
		return $http['delete'](BASE_URL + "/deleteStudentsd/" + studentId).then(
				function(response) {
					console.log(response.status)
					return response.status
				}, function() {
					console.log(response.status)
				})
	};

	studentService.getStudentpdById = function(studentId) {
		return $http.get(BASE_URL + "/getStudentpdbyID/" + studentId)
	};
	studentService.getStudentsdById = function(studentId) {
		return $http.get(BASE_URL + "/getStudentsdbyID/" + studentId)
	};
	
	return studentService;

})

	

	