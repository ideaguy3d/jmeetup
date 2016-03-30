/**
 * Created by Julius Hernandez on 3/8/2016.
 */

angular.module('NextGenContacts')
	.directive('learnMoreV1', [
		function() {
			return {
				restrict: 'E',
				templateUrl: 'templates/learnMoreV1.tem.html'
			}
		}
	]);
