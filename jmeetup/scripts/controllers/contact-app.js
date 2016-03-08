/**
 * Created by Julius Hernandez on 2/4/2016.
 */
angular.module('NextGenContacts')
	.controller('ContactAppCtrl', ['$scope', 'Ref', '$firebaseArray', '$timeout',
		function($scope, Ref, $firebaseArray, $timeout){
			$scope.contacts = $firebaseArray(Ref.child('contacts'));
			$scope.info     = "Version 0.0.1";
			$scope.good = {color: 'green'};
			//$scope.sort = contact.name;

			$scope.contacts.$loaded().catch(alert);

			$scope.addToContacts = function(){
				$scope.contacts.$add({name: $scope.contact, email: $scope.email}).catch(alert);
				$scope.contact = "";
				$scope.email = "";
			};

			$scope.updateContact = function(index){
				$scope.contacts.$save(index);
				$scope.success = 'Successfully Updated';
				$timeout(function(){
					$scope.success = '';
				}, 2000);
			};

			$scope.removeContact = function(index){
				$scope.contacts.$remove(index);
			};

			function alert(msg){
				$scope.err = msg;
				$timeout(function(){
					$scope.err = null;
				}, 4000)
			}
		}
	]);



