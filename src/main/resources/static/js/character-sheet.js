angular.module('characterViewer.characterSheet', ['ngMaterial', 'characterViewer.characterService'])

    .controller('CharacterSheetCtrl', ['$scope', '$routeParams', 'CharacterService', function($scope, $routeParams, CharacterService) {

        $scope.character = CharacterService.getById($routeParams.characterId).then(function(response) {
            $scope.character = response.data;
        })


    }])
