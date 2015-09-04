angular.module('characterViewer', ['ngMaterial', 'ngRoute', 'characterViewer.characterSheet', 'characterViewer.characterService'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider
            .when('/characters', {
                templateUrl: 'partials/empty.html',
                controller: 'CharacterListCtrl'
            })
            .when('/characters/:characterId', {
                templateUrl: 'partials/character-sheet.html',
                controller: 'CharacterSheetCtrl'
            })
            .otherwise({
                redirectTo: '/characters'
            })
    }])

    .controller('CharacterListCtrl', ['$scope', '$mdSidenav', 'CharacterService', function($scope, $mdSidenav, CharacterService) {

        $scope.toggleSidenav = function(menuId) {
            $mdSidenav(menuId).toggle()
        };

        $scope.characters = CharacterService.getAll()
    }])

    .filter('attributeModifier', function() {
        return function(attrValue) {
            var mod = Math.floor((attrValue - 10) / 2);
            if (mod > 0) {
                return '+' + mod;
            } else {
                return mod;
            }
        };
    });
