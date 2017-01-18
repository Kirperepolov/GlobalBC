(function() {
  'use strict';

  angular.module('GLApp')
  .controller('SessionController',SessionController);

  SessionController.$inject=['$stateParams', 'sessions'];
  function SessionController($stateParams, sessions){
    var ctrl = this;
    ctrl.session = sessions[$stateParams.sessionId];

  }

}());
