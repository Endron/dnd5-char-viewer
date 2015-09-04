angular.module('characterViewer.characterSheet', ['ngMaterial'])

    .controller('CharacterSheetCtrl', ['$scope', '$routeParams', function($scope, $routeParams) {
        $scope.characterId = $routeParams.characterId;

        $scope.attributes = [
            {name: 'Strength', abbr: 'str'},
            {name: 'Dexterity', abbr: 'dex'},
            {name: 'Constitution', abbr: 'con'},
            {name: 'Intelligence', abbr: 'int'},
            {name: 'Wisdom', abbr: 'wis'},
            {name: 'Charisma', abbr: 'cha'}
        ];
    }])
