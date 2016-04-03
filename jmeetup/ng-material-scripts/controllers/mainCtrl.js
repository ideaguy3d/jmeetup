"use strict";
/**
 * Created by Julius Hernandez on 3/28/2016.
 */

angular.module('jmeetup')
    .controller('mainCtrl', ['userSer', '$scope', '$mdSidenav', '$mdToast', '$mdDialog', '$mdMedia',
        function (userSer, $scope, $mdSidenav, $mdToast, $mdDialog, $mdMedia) {
            $scope.users = userSer.users;
            $scope.jmessage = "jmeet up app ^_^/";
            $scope.selected = $scope.users[0];
            $scope.seachText = '';
            $scope.tabIndex = 0;
            var x = [0];

            $scope.toggleSideNav = function () {
                $mdSidenav('left').toggle();
            };

            $scope.selectUser = function (user) {
                $scope.selected = user;
                if ($mdSidenav('left').isOpen()) {
                    $mdSidenav('left').close();
                }
                $scope.tabIndex = 0;
            };

            $scope.removeNote = function (note) {
                var foundIndex = $scope.selected.notes.indexOf(note);
                this.selected.notes.splice(foundIndex, 1);
                openToast('Note was removed');
            };

            function openToast(message) {
                $mdToast.show($mdToast.simple().textContent(message)
                    .position('top right')
                    .hideDelay(3000));
            }

            $scope.clearNotes = function (evt) {
                var confirm = $mdDialog.confirm().title('Now, do you really want to Delete All notes?')
                    .textContent('this action cant be undone')
                    .targetEvent(evt)
                    .ok('.Ok')
                    .cancel('.Cancel');
                $mdDialog.show(confirm).then(function () {
                    $scope.selected.notes = [];
                    openToast('Notes have been clear');
                });
            };

            $scope.addUser = function (evt) {
                var useFullScreen = ($mdMedia('sm') || $mdMedia('xs'));

                $mdDialog.show({
                        templateUrl: 'views/newUserDialog.html',
                        parent: angular.element(document.body),
                        targetEvent: evt,
                        controller: "addUserDialogCtrl",
                        //controllerAs: 'userDialogCtrl',
                        clickOutsideToClose: true,
                        fullscreen: useFullScreen
                    })
                    .then(function (user) {
                        openToast("The User has been added ^_^");
                    }, function () {
                        openToast("Dialog has been been canceled");
                    });
            };

        }//end of ctrl function
    ]);