angular.module('characterViewer.characterService', [])

    .service('CharacterService', ['$http', function($http) {
        var service = this

        service.getAll = function() {
            return $http.get('/characters')
        }

        service.getById = function(id) {
            return $http.get('/characters/' + id)
        }

    }])
