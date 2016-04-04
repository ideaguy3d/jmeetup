/**
 * Created by Julius Hernandez on 4/2/2016.
 */

"use strict";

angular.module('jmeetup')
    .controller('contactPanelCtrl', [
        '$scope', 'userSer', '$mdBottomSheet',
        function ($scope, userSer, $mdBottomSheet) {
            $scope.user = userSer.selectedUser;
            $scope.actions = [
                {name: 'Phone', icon: 'phone'},
                {name: 'Twitter', icon: 'twitter'},
                {name: 'Google+', icon: 'google_plus'},
                {name: 'Hangout', icon: 'hangouts'}
            ];

            $scope.submitContact = function (action) {
                $mdBottomSheet.hide(action);
            };
        }
    ]);
