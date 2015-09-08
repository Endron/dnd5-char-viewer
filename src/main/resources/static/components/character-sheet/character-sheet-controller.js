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
    ];

    ctrl.getSkillBonus = function(skillName) {

       var skillAttribute = ctrl.attributeForSkill(skillName);

        var attributeBonus = ctrl.getAttributeBonus(skillAttribute);
        var proficiencyBonus = 0; //TODO check if proficency must be added.

        if(attributeBonus + proficiencyBonus > 0) { //TODO move to filter?
            return '+' + (attributeBonus + proficiencyBonus);
        } else {
            return attributeBonus + proficiencyBonus;
        }
    };

    ctrl.getAttribute = function(attributeName) {
        return ctrl.character.attributes[attributeName]
    };

    ctrl.getAttributeBonus = function(attributeName) {
        return Math.floor((ctrl.getAttribute(attributeName) - 10) / 2);
    };

    ctrl.attributeForSkill = function(skillName) {
        var skill = null;
        ctrl.skills.forEach(function(it) {
            if(it.name == skillName) {
                skill = it;
            }
        });

        if(skill == null || skill == undefined) {
            return '';
        } else {
            return skill.attribute;
        }
    };
}
