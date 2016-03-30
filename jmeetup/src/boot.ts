
/**
 * Created by Julius Hernandez on 3/28/2016.
 */
/// <reference path="_all.ts" />

module jMeetupApp {
    angular.module('jmeetup', ['ngMaterial'])
        .service('userService', UserService)
        .controller('mainCtrl', MainCtrl);
}

