(function() {
  'use strict';

  angular.module('GLApp')
  .directive('sessinDirective',sessinDirective);

  function sessinDirective(){
    let ddo = {
      templateUrl: 'site/src/sessions/session.directive.html',
      scope: {
        session: '<',
        sessionId: '<'
      },
      restrict:'E'
    };

    return ddo;
  };

}());
