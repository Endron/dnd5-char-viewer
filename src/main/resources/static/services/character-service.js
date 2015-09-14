angular.module('charViewer.character.service', [])

    .service('CharacterService', ['$http', CharacterService]);

function CharacterService($http) {
    /*
     * TODO implement caching
     * The service should probably implement some kind of caching. We should avoid loading the character with each method
     * call instead we should have a cache, that stores the characters. This could be as simple as some kind of Map
     * storing ids and already loaded character.
     */

    var service = this;

    service.getAll = function() {
        return $http.get('/characters')
    };

    service.getById = function(id) {
        return $http.get('/characters/' + id)
    };
}
