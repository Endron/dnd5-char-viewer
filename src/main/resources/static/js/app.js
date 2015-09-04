angular.module('characterViewer', ['ngMaterial', 'ngRoute'])

.config(['$routeProvider',
    function($routeProvider) {
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

    $scope.attributes = [
        {name: 'Strength', abbr: 'str'},
        {name: 'Dexterity', abbr: 'dex'},
        {name: 'Constitution', abbr: 'con'},
        {name: 'Intelligence', abbr: 'int'},
        {name: 'Wisdom', abbr: 'wis'},
        {name: 'Charisma', abbr: 'cha'}
    ];

    $scope.characters = CharacterService.getAll()
}])

.controller('CharacterSheetCtrl', ['$scope', '$routeParams', function($scope, $routeParams) {

    $scope.characterId = $routeParams.characterId;
}])

.service('CharacterService', [function() {
    var service = this

    var allCharacters = [
        {
            id: 0,
            name: 'Guruk',
            classes: [
                {
                    name: 'Babarian',
                    level: 2
                }
            ],
            attributes: {
                str: 15,
                dex: 14,
                con: 13,
                int: 12,
                wis: 10,
                cha: 8
            }
        },
        {
            id: 1,
            name: 'Heronimus',
            classes: [
                {
                    name: 'Paladin',
                    level: 1
                },
                {
                    name: 'Bard',
                    level: 1
                }
            ],
            attributes: {
                str: 15,
                dex: 14,
                con: 13,
                int: 12,
                wis: 10,
                cha: 8
            }
        }
    ];

    service.getAll = function() {
        return allCharacters
    }

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
