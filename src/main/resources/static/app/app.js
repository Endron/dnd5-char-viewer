angular.module('characterViewer', [
    'ngMaterial',
    'ngNewRouter',
    'characterViewer.startpage',
    'characterViewer.character.sheet',
    'characterViewer.navigation'])

    .controller('AppController', ['$router', '$mdSidenav', AppController])

;

AppController.$routeConfig = [
    {path: '/', redirectTo: '/characters'},

    {path: '/characters', components: {content: 'startpage', navigation: 'navigation'}},
    {path: '/characters/:characterId', components: {content: 'characterSheet', navigation: 'navigation'}}
];

function AppController($router, $mdSidenav) {
    var ctrl = this;

    ctrl.toggleSidenav = function(id) {
        $mdSidenav(id).toggle();
    };
}


