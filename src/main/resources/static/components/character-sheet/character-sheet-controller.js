angular.module('characterViewer.character.sheet', [
    'ngNewRouter',
    'charViewer.character.service',
    'charViewer.attribute.modifier.service',
    'charViewer.attribute.modifier.filter',
    'charViewer.addPlus'
    ])

    .controller('CharacterSheetController', ['CharacterService', 'AttributeModifierService', '$routeParams', CharacterSheetController]);

function CharacterSheetController(CharacterService, AttributeModifierService, $routeParams) {
    var ctrl = this;

    ctrl.character = CharacterService.getById($routeParams.characterId);

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

       var skillAttribute = ctrl.getAttributeForSkill(skillName);

        var attributeBonus = ctrl.getAttributeBonus(skillAttribute);
        var proficiencyBonus = ctrl.getProficiencyBonusForSkill(skillName);

        return attributeBonus + proficiencyBonus;
    };

    ctrl.getAttribute = function(attributeName) {
        return ctrl.character.attributes[attributeName]
    };

    ctrl.getAttributeBonus = function(attributeName) {
        var attributeValue = ctrl.getAttribute(attributeName);

        return AttributeModifierService.calcModifier(attributeValue);
    };

    ctrl.getAttributeForSkill = function(skillName) {
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

    ctrl.isProficientInSkill = function(skillName) {
        var isProficient = false;
        ctrl.character.skillProficiency.forEach(function(it) {
            if(it == skillName) {
                isProficient = true;
            }
        });

        return isProficient;
    };

    ctrl.getProficientInSkillIcon = function(skillname) {
        if(ctrl.isProficientInSkill(skillname)) {
            return 'fa-circle';
        } else {
            return 'fa-circle-o';
        }
    };

    ctrl.getProficiencyBonusForSkill = function(skillName) {
        if(ctrl.isProficientInSkill(skillName)) {
            return ctrl.character.proficiencyBonus;
        } else {
            return 0;
        }
    };
}
