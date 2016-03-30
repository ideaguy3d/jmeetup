/**
 * Created by Julius Hernandez on 3/28/2016.
 */
/// <reference path="_all.ts" />
var jMeetupApp;
(function (jMeetupApp) {
    angular.module('jmeetup', ['ngMaterial'])
        .service('userService', UserService)
        .controller('mainCtrl', MainCtrl);
})(jMeetupApp || (jMeetupApp = {}));
//# sourceMappingURL=boot.js.map