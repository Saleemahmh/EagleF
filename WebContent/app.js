/**
 * 
 */

var app = angular.module('myApp', [ 'ngRoute', 'ngCookies' ]);

console.log('----Starting app.js')
app.config(function($routeProvider) {
	$routeProvider.when('/', {
		templateUrl : 'e_pages/home.html'
	}).when('/listofStudentpd', {
		templateUrl : 'e_personal/listofStudentpd.html',
		controller : 'studentController'
	}).when('/addNew', {
		templateUrl : 'e_personal/addNew.html',
		controller : 'studentController'
	}).when('/listofStudentsd', {
		templateUrl : 'e_personal/listofStudentsd.html',
		controller : 'studentController'
	}).when('/addNewSD', {
		templateUrl : 'e_personal/addNewSD.html',
		controller : 'studentController'
	})

	.otherwise({
		redirectTo : '/'
	})
});
// DIRECTIVE - FILE MODEL
app.directive('fileModel', ['$parse', function ($parse) {
    return {
       restrict: 'A',
       link: function(scope, element, attrs) {
          var model = $parse(attrs.fileModel);
          var modelSetter = model.assign;
          
          element.bind('change', function(){
             scope.$apply(function(){
                modelSetter(scope, element[0].files[0]);
             });
          });
       }
    };
}]); 