app.controller('studentpdController', function($scope, studentpdService, $location) {
	console.log('entering studentpd controller')

	$scope.studentpd = {
		studentId : '',
		name : '',
		dob : '',
		age : '',
		parentName : '',
		contactNo : '',
		contactEmail : '',
		bloodGrp : ''	
	};

	$scope.studentpds;

	function fetchAllStudentpd() {
		console.log('entering fetchAll studentpds in controller')
		studentpdService.fetchAllStudentpd().then(function(data) {
			$scope.studentpds = data;
		}, function(error) {
			console.log('Error : ' + error)
		});
	}
	;
	fetchAllStudentpd();

	$scope.addStudentpd = function(studentpd) {
		console.log('create Student...')
		studentpdService.addStudentpd(studentpd).then(fetchAllStudentpd(),
				function(errResponse) {
					console.error('Error while Creating Student')
				});
	};

	$scope. updateStudentpd = function(studentId) {
		console.log('entering  updateStudentpd in controller' + studentId)
		studentpdService. updateStudentpd(studentId).then(fetchAllStudentpd(),
				function(errResponse) {
					console.error('Error while updating : ' + errResponse)
				});
	};

	$scope. updateStudentpd = function() {
		{
			console.log('updating', $scope.studentpd.studentId)
			$scope. updateStudentpd($scope.studentpd.studentId);
		}
	}

	$scope.submit = function() {
		{
			console.log('saving Studentpd' + $scope.studentpd)
			$scope.addStudentpd($scope.studentpd);
		}
		$scope.reset();
		$location.path("/listofStudentpd")
	};

	$scope.deleteStudentpd = function(studentId) {
		console.log('entering deleteStudentpd in controller studentId : ' + studentId)
		studentpdService.deleteStudentpd(studentId).then(function() {
			console.log('Deleted Successfully')
			alert('Deleted Successfully')
			fetchAllStudentpd();

		}, function() {
			console.log('Unable to delete')
		})
	};


	$scope.reset = function() {
		$scope.studentpd = {
			studentId : '',
		name : '',
		dob : '',
		age : '',
		parentName : '',
		contactNo : '',
		contactEmail : '',
		bloodGrp : ''	
		};
		$scope.myForm.$setPristine();
	};

});