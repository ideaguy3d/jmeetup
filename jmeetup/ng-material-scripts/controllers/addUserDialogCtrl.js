/**
 * Created by Julius Hernandez on 3/31/2016.
 */
"use strict";

angular.module('jmeetup')
    // this controls the newUserDialog.html template
    .controller('addUserDialogCtrl', ['$scope', '$mdDialog', 'userSer',
        function ($scope, $mdDialog, userSer) {
            $scope.addUserDialog_user = {};
            var user = $scope.addUserDialog_user;

            $scope.save_addUserDialog = function () {
                $mdDialog.hide();
                //userSer.addUser("... form will fill");
                console.log("saved user = "+$scope.addUserDialog_user.firstName+" "+$scope.addUserDialog_user.lastName);
                console.log(user.bio+", user obj = "+user);
                userSer.addCreatedUser(user);
            };

            $scope.cancel_addUserDialog = function () {
                $mdDialog.cancel();
            };

            $scope.avatars = ['svg-1', 'julius-1', 'svg-2'];
        }
    ]);

