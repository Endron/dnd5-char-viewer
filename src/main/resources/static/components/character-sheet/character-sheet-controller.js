angular.module('characterViewer.character.sheet', ['ngNewRouter', 'characterViewer.character.service', 'charViewer.attribute.modifier'])

    .controller('CharacterSheetController', ['CharacterService', '$routeParams', CharacterSheetController]);

function CharacterSheetController(CharacterService, $routeParams) {
    var ctrl = this;

    ctrl.character = {}
    CharacterService.getById($routeParams.characterId).then(function(response) {
        ctrl.character = response.data;
    });

    ctrl.skills = [
        {name: 'Acrobatics', attribute: 'DEXTERITY'},
        {name: 'Animal Handling', attribute: 'WISDOM'},
        {name: 'Arcana', attribute: 'INTELLIGENCE'},
        {name: 'Athletics', attribute: 'STRENGTH'},
        {name: 'Deception', attribute: 'CHARISMA'},
        {name: 'History', attribute: 'INTELLIGENCE'},
        {name: 'Insight', attribute: 'WISDOM'},
        {name: 'Intimidation', attribute: 'CHARISMA'},
        {name: 'Investigation', attribute: 'INTELLIGENCE'},
        {name: 'Medicine', attribute: 'WISDOM'},
        {name: 'Nature', attribute: 'INTELLIGENCE'},
        {name: 'Perception', attribute: 'WISDOM'},
        {name: 'Performance', attribute: 'CHARISMA'},
        {name: 'Persuasion', attribute: 'CHARISMA'},
        {name: 'Religion', attribute: 'INTELLIGENCE'},
        {name: 'Sleight of Hand', attribute: 'DEXTERITY'},
        {name: 'Stealth', attribute: 'DEXTERITY'},
        {name: 'Survival', attribute: 'WISDOM'}
    ]
}
