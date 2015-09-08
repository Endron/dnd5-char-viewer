angular.module('characterViewer.character.service', [])

    .service('CharacterService', ['$http', CharacterService])

function CharacterService($http) {
    var service = this;

    service.getAll = function() {
        return $http.get('/characters')
    };

    service.getById = function(id) {
        return $http.get('/characters/' + id)
    };
}
