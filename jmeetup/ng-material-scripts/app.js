/**
 * Created by Julius Hernandez on 3/28/2016.
 */
angular.module('jmeetup', ['ngMaterial', 'ngMdIcons'])
    .config(['$mdIconProvider', '$mdThemingProvider',
        function ($mdIconProvider, $mdThemingProvider) {
            $mdIconProvider
                .defaultIconSet('img/svg/avatars.svg', 128)
                .icon('menu', 'img/svg/menu.svg', 24);
            $mdThemingProvider.theme('default')
                .primaryPalette('green')
                .accentPalette('red');
        }
    ]);