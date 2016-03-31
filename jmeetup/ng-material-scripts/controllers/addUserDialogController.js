/**
 * Created by Julius Hernandez on 3/31/2016.
 */
"use strict";

angular.module('jmeetup')
    .controller('addUserDialogCtrl', ['$scope', '$mdDialog', 'userSer', function ($scope, $mdDialog, userSer) {
        $scope.audSave = function () {
            $mdDialog.hide()
        };

        $scope.audCancel = function () {

        };

    }]);

