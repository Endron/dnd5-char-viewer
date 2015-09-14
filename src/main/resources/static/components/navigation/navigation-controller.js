angular.module('characterViewer.navigation', [
    'ngMaterial',
    'ngNewRouter',
    'characterViewer.character.service'])
    .controller('NavigationController', ['$router', '$mdSidenav', 'CharacterService', NavigationController]);

function NavigationController($router, $mdSidenav, CharacterService) {
    var ctrl = this;

    ctrl.characters = [];
    CharacterService.getAll().then(function(response) {
        ctrl.characters = response.data;
    });

    ctrl.navigateTo = function(character) {
        $router.parent.navigate('/characters/' + character.id);
        $mdSidenav('left').close();
    };
}
