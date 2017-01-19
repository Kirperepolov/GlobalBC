(function() {
  'use strict';

  angular.module('GLApp')
  .directive('sessinDirective',sessinDirective);

  function sessinDirective(){
    let ddo = {
      templateUrl: 'templates/session.directive.html',
      scope: {
        session: '<'
      },
      restrict:'E'
    };

    return ddo;
  };

}());
