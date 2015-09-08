angular.module('characterViewer.character.sheet', ['ngNewRouter', 'characterViewer.character.service'])

    .controller('CharacterSheetController', ['CharacterService', '$routeParams', CharacterSheetController]);

function CharacterSheetController(CharacterService, $routeParams) {
    var ctrl = this;

    CharacterService.getById($routeParams.characterId).then(function(response) {
        ctrl.character = response.data;
    });
}
