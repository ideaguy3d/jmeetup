"use strict";
/**
 * Created by Julius Hernandez on 3/28/2016.
 */

angular.module('jmeetup')
    .controller('mainCtrl', ['userSer', '$scope', '$mdSidenav',
        function (userSer, $scope, $mdSidenav) {
            $scope.users = userSer.users;
            $scope.jmessage = "jmeet up app ^_^/";
            $scope.selected = $scope.users[0];

            $scope.toggleSideNav = function () {
                $mdSidenav('left').toggle();
            };

            $scope.selectUser = function (user) {
                $scope.selected = user;
                if($mdSidenav('left').isOpen()) {
                    $mdSidenav('left').close();
                }
            };
        }
    ]);