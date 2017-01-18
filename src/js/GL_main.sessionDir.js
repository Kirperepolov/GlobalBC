(function() {
  'use strict';

  angular.module('GLApp')
  .directive('sessinDirective',sessinDirective);

  function sessinDirective(){
    let ddo = {
      templateUrl: 'snippets/session.directive.html',
      scope: {
        session: '<'
      },
      restrict:'E'
    };

    return ddo;
  };

}());
