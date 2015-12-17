var model = {
            courses: [],
            done: [],
        };

var users = new Map();
users.set('user', 'password');

var loginApp = angular.module('todoApp', []);	

loginApp.controller('MenuCtrl', function($scope, $window) {

	$scope.currentUser = '';
	$scope.noAccess = '';
	$scope.enableEdit = false;
	$scope.booleanLogin = true;
	$scope.booleanRegister = false;
	$scope.booleanList = false;

    $scope.menu = function (log, reg, list){
    	$scope.booleanLogin = log;
		$scope.booleanRegister = reg;
		$scope.booleanList = list;
    };

    $scope.add = function () {
    	if ($scope.data.courses.indexOf($scope.courseName) == -1 && $scope.courseName) {
    		$scope.data.courses.push($scope.courseName);
    	};
    };

    $scope.delete = function (x) {
    	var index = $scope.data.courses.indexOf(x);
  		$scope.data.courses.splice(index, 1); 
    };

    $scope.doneCourse = function (x) {
    	var index = $scope.data.courses.indexOf(x);
  		$scope.data.courses.splice(index, 1);
  		$scope.data.done.push(x);
    }

    $scope.deleteFromDone = function (x) {
    	var index = $scope.data.done.indexOf(x);
  		$scope.data.done.splice(index, 1);
    }

    $scope.revert = function (x) {
    	var index = $scope.data.done.indexOf(x);
  		$scope.data.done.splice(index, 1);
  		$scope.data.courses.push(x);
    }

    $scope.edit = function (x) {
    }

    $scope.logIn = function () {
    	if ($scope.usernameInput && $scope.passwordInput && $scope.passwordInput == $scope.pswd.get($scope.usernameInput)) {
    		$scope.booleanLogin = false;
			$scope.booleanRegister = false;
			$scope.booleanList = true;
			$scope.currentUser = new String($scope.usernameInput).valueOf();
    		$scope.usernameInput = '';
    		$scope.passwordInput = '';
    		$scope.noAccess = '';
    	} else{
    		$scope.usernameInput = '';
    		$scope.passwordInput = '';
    		$scope.noAccess = 'Access denied!';
    	};
    }

    $scope.data = model;
    $scope.pswd = users;

});