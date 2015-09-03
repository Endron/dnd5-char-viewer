var app = angular.module('charViewer', ['ngMaterial', 'ngRoute']);

app.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider
            .when('/characters', {
                templateUrl: 'partials/empty.html',
                controller: 'CharacterListCtrl'
            })
            .when('/characters/:characterId', {
                templateUrl: 'partials/character-sheet.html',
                controller: 'CharacterCtrl'
            })
            .otherwise({
                redirectTo: '/characters'
            })
    }]);

app.controller('CharacterListCtrl', ['$scope', '$mdSidenav', 'CharacterService', function($scope, $mdSidenav, CharacterService) {

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
}]);

app.controller('CharacterCtrl', ['$scope', '$routeParams', function($scope, $routeParams) {

    $scope.characterId = $routeParams.characterId;
}]);

app.service('CharacterService', [function() {
    var service = this

    var allCharacters = [
        {id: 0, name: 'Hans'},
        {id: 1, name: 'Bob'}
    ];

    service.getAll = function() {
        return allCharacters
    }

}]);

app.filter('attributeModifier', function() {
    return function(attrValue) {
        var mod = Math.floor((attrValue - 10) / 2);
        if (mod > 0) {
            return '+' + mod;
        } else {
            return mod;
        }
    };
});
