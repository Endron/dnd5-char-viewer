var app = angular.module('charViewer', ['ngMaterial']);
app.controller('CharCtrl', ['$scope', '$mdSidenav', function($scope, $mdSidenav) {

    $scope.toggleSidenav = function(menuId) {
        $mdSidenav(menuId).toggle()
    }

    $scope.attributes = [
        {name: 'Strength', abbr: 'str'},
        {name: 'Dexterity', abbr: 'dex'},
        {name: 'Constitution', abbr: 'con'},
        {name: 'Intelligence', abbr: 'int'},
        {name: 'Wisdom', abbr: 'wis'},
        {name: 'Charisma', abbr: 'cha'}
    ];

    $scope.char = {
        name: 'Berengard of Plimuth',
        classes: [
            {name: 'Paladin', level: 1},
            {name: 'Fighter', level: 1}
        ],
        race: 'Human',
        background: 'nobel',
        alignment: 'lawful good',
        experiencePoints: 0,
        str: 15,
        dex: 8,
        con: 16,
        int: 11,
        wis: 14,
        cha: 13
    };
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
