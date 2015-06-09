var app = angular.module('charViewer', []);
app.controller('CharCtrl', function($scope) {

    $scope.attributes = [
        {name: 'Strength', abbr: 'str'},
        {name: 'Dexterity', abbr: 'dex'},
        {name: 'Constitution', abbr: 'con'},
        {name: 'Intelligence', abbr: 'int'},
        {name: 'Wisdom', abbr: 'wis'},
        {name: 'Charisma', abbr: 'cha'}
    ];

    $scope.char = {
        name: 'Paul',
        class: 'Paladin',
        str: 15,
        dex: 8,
        con: 16,
        int: 11,
        wis: 14,
        cha: 13
    };

    $scope.getAttributeModifier = function(attrValue) {
        return Math.floor((attrValue - 10) / 2);
    };
});

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
