angular.module('characterViewer.characterSheet', ['ngMaterial', 'characterViewer.characterService'])

    .controller('CharacterSheetCtrl', ['$scope', '$routeParams', 'CharacterService', function($scope, $routeParams, CharacterService) {

        $scope.character = CharacterService.getById($routeParams.characterId).then(function(response) {
            $scope.character = response.data;
        })

        $scope.attributes = [
            {name: 'Strength', abbr: 'str'},
            {name: 'Dexterity', abbr: 'dex'},
            {name: 'Constitution', abbr: 'con'},
            {name: 'Intelligence', abbr: 'int'},
            {name: 'Wisdom', abbr: 'wis'},
            {name: 'Charisma', abbr: 'cha'}
        ];
    }])
