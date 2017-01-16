(function() {
  'use strict';

  angular.module('GLApp')
  .controller('MainController',MainController);

  MainController.$inject=['LoadService'];
  function MainController(LoadService){
    var ctrl = this;

    ctrl.setIndex = function(i){
      ctrl.index = 0;
      console.log("The index is: "+ctrl.index);
      return;
    };

    (function() {
      var foundPromise = LoadService.getList();
      foundPromise.then(function(obj){ctrl.lecturesList=obj.lectures})
                  .catch(error=>console.log(error.message));
    }());


  }

}());
