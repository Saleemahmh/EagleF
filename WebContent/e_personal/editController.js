/**
 * 
 */
app.controller('editController', function($scope, $routeParams, $location,
		studentpdService) {
	console.log('entering editController')

	var studentId = $routeParams.studentId;

	$scope.studentpd = studentpdService.getStudentpdById(studentId).then(function(response) {
		console.log(response.status)
		$scope.studentpd = response.data;
	}, null)

	$scope.update = function() {
		console.log('entering update function')
		studentpdService.updateStudentpd(studentId, $scope.studentpd);
		console.log('updated successfully')
		alert('updated successfully');
		$location.path('/');
	};

})