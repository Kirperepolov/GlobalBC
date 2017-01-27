(function() {
  'use strict';

  angular.module('GLApp')
  .service('LoadService',LoadService);

  LoadService.$inject = ['$http'];
  function LoadService($http){
    var service = this;
    service.lecturesList ={};

    service.getList = function(color){
      let path = 'site/src/session_list.json';

      return $http.get(path)    //a shortcut method fot GET requests
      .then(function (result) {
          service.lecturesList = result.data.lectures;

        return service.lecturesList;
      })
      .catch(error=>error.message);
    };
  };

}());
