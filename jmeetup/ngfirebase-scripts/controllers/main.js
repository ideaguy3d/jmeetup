'use strict';

/**
 * @ngdoc function
 * @name mytodoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the mytodoApp
 */
angular.module('NextGenContacts')
	.controller('MainCtrl', function($scope){

		$scope.awesomeThings = [
			'HTML5 Boilerplate',
			'AngularJS',
			'Karma'
		];
		$scope.todos = ['task 1', 'task 2', 'task 3'];
		$scope.scrolledDown  = false;
		$scope.author        = "Julius Alvarado";

		$scope.addTodo = function(){
			$scope.todos.push($scope.todo);
			$scope.todo = "";
		};

		$scope.removeTask = function(index){
			$scope.todos.splice(index, 1);
		}
	});
