app.controller(
				'studentController',
				function($scope, studentService,$http, $location,$window,$filter) {
					console.log('entering student controller')
				
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
					$scope.name = {
						name : ''
					};
					$scope.studentpdUpdate = {
						studentId : '',
						name : '',
						dob : '',
						age : '',
						parentName : '',
						contactNo : '',
						contactEmail : '',
						bloodGrp : ''
					};
					$scope.studentsd = {
							studentId : '',
							dateofjoining : '',
							presentkyu : '',
							presentbelt : '',
							lastgradingdate : '',
							nextgradingdate : '',
							katas : '',
							combinations : '' ,
							sparingtechniques:' ',
							level :'',
							kbi :'',
							open :'',
							feepaid :'',
							pendingfee :''
					};
					$scope.studentsdUpdate = {
							studentId : '',
							dateofjoining : '',
							presentkyu : '',
							presentbelt : '',
							lastgradingdate : '',
							nextgradingdate : '',
							katas : '',
							combinations : '' ,
							sparingtechniques:' ',
							level :'',
							kbi :'',
							open :'',
							feepaid :'',
							pendingfee :''
					};
					$scope.studentselected = $scope.studentpds;
					$scope.studentselected1=$scope.studentsds;
					$scope.studentsds;
					$scope.studentpds;
					
						$scope.studentpd.dob = $filter('date')($scope.studentpd.dob, "dd/MM/yyyy");
					  
					$scope.calculateAge = function calculateAge(dob) { // birthday is a date
						var ageDifMs = Date.now() - dob.getTime();
						console.log(Date.now());
						console.log(dob.getTime());
						var ageDate = new Date(ageDifMs); // miliseconds from epoch
						$scope.studentpd.age=Math.abs(ageDate.getUTCFullYear() - 1970);
						console.log($scope.studentpd.age);
						return $scope.studentpd.age;
					}

					function fetchAllStudentpd() {
						console
								.log('entering fetchAll studentpds in controller')
						studentService.fetchAllStudentpd().then(function(data) {
							$scope.studentpds = data;
						}, function(error) {
							console.log('Error : ' + error)
						});
					}
					;
					
					fetchAllStudentpd();
					
					function fetchAllStudentsd() {
						console
								.log('entering fetch all Studentsds in controller')
						studentService.fetchAllStudentsd().then(function(data) {
							$scope.studentsds = data;
						}, function(error) {
							console.log('Error:' + error)
						});
					}
					;
					
					fetchAllStudentsd();
					
					function getStudentImg(){
						console.log('Get Student image')
						var imgurl=[];
						studentService.getStudentImg().then (function(data){
						imgurl=data;
						console.log(data)
						for(var i=0;i< imgurl.length;i++){
						studentService.getImageUrl(imgurl[i]).then(function(data){
							console.log(data)
						})
					}
						console.log(data)
						},function(error){
							console.log('Error'+ error)
						});
					};
					
					getStudentImg();
					$scope.addStudentpd = function(studentpd) {
						console.log('create Student...')
						studentService
								.addStudentpd(studentpd)
								.then(
										function(data) {
											console.log('reloading')
											$window.location.href = '#/listofStudentpd';
											//$window.location.reload();
											fetchAllStudentpd();
										},
										function(errResponse) {
											console
													.error('Error while Creating Student')
										});
					};

					$scope.addStudentsd = function(studentsd) {
						console.log('create Student...')
						studentService
								.addStudentsd(studentsd)
								.then(
										function(data) {
											console.log('reloading')
											$window.location.href = '#/listofStudentsd';
											//$window.location.reload();
											fetchAllStudentsd();
											
											
											
										},
										function(errResponse) {
											console
													.error('Error while Creating Student')
										});
					};
					
					$scope.updateStudentpd = function(studentId) {
						console.log('entering  updatePerson in controller'
								+ studentId)
						studentService.updateStudentpd(studentId,
								$scope.studentpdUpdate).then(
								function(data) {
									fetchAllStudentpd();
								},
								function(errResponse) {
									console.error('Error while updating : '
											+ errResponse)
								});
					};

					$scope.updateStudentpdLog = function(studentpd) {

						console.log('updating', studentpd)
						$scope.studentpdUpdate = studentpd;

					}
					
					$scope.updateStudentsd = function(studentId) {
						console.log('entering  update in controller'
								+ studentId)
						studentService.updateStudentsd(studentId,
								$scope.studentsdUpdate).then(
								function(data) {
									fetchAllStudentsd();
								},
								function(errResponse) {
									console.error('Error while updating : '
											+ errResponse)
								});
					};

					$scope.updateStudentsdLog = function(studentsd) {

						console.log('updating', studentsd)
						$scope.studentsdUpdate = studentsd;

					}
					
					$scope.submit = function() {
						{
							console.log('saving Studentpd' + $scope.studentpd)
							$scope.addStudentpd($scope.studentpd);
						}
						$scope.reset();
						$location.path("/listofStudentpd")
					};

					$scope.submitsd = function() {
						{
							console.log('saving Studentsd' + $scope.studentsd)
							$scope.addStudentsd($scope.studentsd);
						}
						$scope.reset();
						$location.path("/listofStudentsd")
					};
					
					
					$scope.deleteStudentpd = function(studentId) {
						console
								.log('entering deleteStudentpd in controller studentId : '
										+ studentId)
						studentService.deleteStudentpd(studentId).then(
								function() {
									console.log('Deleted Successfully')
									// alert('Deleted Successfully')
									fetchAllStudentpd();

								}, function() {
									console.log('Unable to delete')
								})
					};
					$scope.deleteStudentsd = function(studentId) {
						console
								.log('entering deleteStudentsd in controller studentId : '
										+ studentId)
						studentService.deleteStudentsd(studentId).then(
								function() {
									console.log('Deleted Successfully')
									// alert('Deleted Successfully')
									fetchAllStudentsd();

								}, function() {
									console.log('Unable to delete')
								})
					};

					$scope.doUploadFile = function(){
						var file = $scope.uploadedFile;
						var url = "http://localhost:8090/rest/eagle/uploadfile";
						console.log(file);
						var data = new FormData();
						data.append('uploadfile', file);
					 
						var config = {
								transformRequest: angular.identity,
								transformResponse: angular.identity,
								headers : {
									'Content-Type': undefined
								}
						}
						
						$http.post(url, data, config).then(function (response) {
							 $scope.uploadResult=response.data;
							 console.log(uploadResult);
						 }, function (response) {
							 $scope.uploadResult=response.data;
						 });
						 
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
					$scope.reset = function() {
						$scope.studentsd = {
							studentId : '',
							dateofjoining : '',
							presentkyu : '',
							presentbelt : '',
							lastgradingdate : '',
							nextgradingdate : '',
							katas : '',
							combinations : '' ,
							sparingtechniques:' ',
							level :'',
							kbi :'',
							open :'',
							feepaid :'',
							pendingfee :''
						};
						
						$scope.myForm.$setPristine();
					};
					
				});


				
					