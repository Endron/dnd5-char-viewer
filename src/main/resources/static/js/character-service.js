var app = angular.module('charViewer.character.service', [])
app.service('CharacterService', ['$q', function($q) {
    var service = this

    var allCharacters = [
        {id:0, name: 'Hans'},
        {id:1, name: 'Bob'}
    ]

    service.getAll = function() {
        return $q.when(allCharacters)
    }

}])
