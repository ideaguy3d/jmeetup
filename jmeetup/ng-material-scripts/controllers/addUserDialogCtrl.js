/**
 * Created by Julius Hernandez on 3/31/2016.
 */
"use strict";

angular.module('jmeetup')
    .controller('addUserDialogCtrl', ['$scope', '$mdDialog', 'userSer', function ($scope, $mdDialog, userSer) {
        // aud = add user dialog
        $scope.save_addUserDialog = function () {
            $mdDialog.hide();
            userSer.addUser("... form will fill this soon");
        };

        $scope.cancel_addUserDialog = function () {
            $mdDialog.cancel();
        };
    }]);

