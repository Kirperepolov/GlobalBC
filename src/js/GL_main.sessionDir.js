(function() {
  'use strict';

  angular.module('GLApp')
  .directive('sessinDirective',sessinDirective);

  function sessinDirective(){
    let ddo = {
      templateUrl: 'snippets/session.directive.html',
      scope: {
        lecturesList: '<',
        lectureIndex: '<'
      },
      restrict:'E'
    };

    return ddo;
  };

}());
