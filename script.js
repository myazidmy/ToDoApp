var appX = angular.module('mainApp', []);

appX.controller('app', function($scope){ //runtime applcation initiator

	//$scope.searchEnter = function(){
		$scope.array = [];

		var taskData = localStorage['tasksList'];

	   if (taskData !== undefined){

			$scope.array = JSON.parse(taskData);

		 }

		$scope.searchEnter = function(){
			if (event.keyCode == 13 && $scope.task != ""){

			$scope.addTask();

		}

	};

	$scope.addTask = function(){

		$scope.array.push({'taskMessage': $scope.task, 'status':false}); //complete = false
		console.log($scope.array);
		$scope.task = ''; //reset the task
		localStorage['tasksList'] = JSON.stringify($scope.array);
		console.log(localStorage);
		};

	$scope.contentEdit = function(msg){
		
		event.target.contentEditable = event.target.contentEditable == "false" ? "true" : "false";
		console.log('something');


		//if boolX is (==) false  then (?) it should be  true (:) else false
		//just togling the false and true values
	}

	$scope.updateEnter = function(msg){

		if (event.keyCode == 13 && msg != ""){

			$scope.contentEdit();
			console.log('something');
		}


	}

});