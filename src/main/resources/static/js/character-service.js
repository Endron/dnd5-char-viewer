angular.module('characterViewer.characterService', [])

    .service('CharacterService', [function() {
        var service = this

        var allCharacters = [
            {
                id: 0,
                name: 'Guruk',
                classes: [
                    {
                        name: 'Babarian',
                        level: 2
                    }
                ],
                attributes: {
                    str: 15,
                    dex: 14,
                    con: 13,
                    int: 12,
                    wis: 10,
                    cha: 8
                }
            },
            {
                id: 1,
                name: 'Heronimus',
                classes: [
                    {
                        name: 'Paladin',
                        level: 1
                    },
                    {
                        name: 'Bard',
                        level: 1
                    }
                ],
                attributes: {
                    str: 15,
                    dex: 14,
                    con: 13,
                    int: 12,
                    wis: 10,
                    cha: 8
                }
            }
        ];

        service.getAll = function() {
            return allCharacters
        }

    }])
