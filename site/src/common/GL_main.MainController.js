(function() {
  'use strict';

  angular.module('GLApp')
  .controller('MainController',MainController);

  MainController.$inject=['sessions'];
  function MainController(sessions){
    var ctrl = this;

    ctrl.sessionsList=sessions;

  }

}());
