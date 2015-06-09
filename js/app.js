angular.module('charViewer', [])
    .controller('CharCtrl', function($scope) {

        $scope.char = {
            name: 'Paul',
            class: 'Paladin',
            str: 15,
            dex: 9,
            con: 16,
            int: 10,
            wis: 14,
            cha: 10
        };

    });
