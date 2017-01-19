(function() {
  'use strict';

  angular.module('GLApp')
  .config(RoutesConfig);

  RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
  function RoutesConfig($stateProvider, $urlRouterProvider) {

    // Redirect to tab 1 if no other URL matches
    $urlRouterProvider.otherwise('/');

    // Set up UI states
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'snippets/home.template.html',
        controller: 'MainController as sessionsCtrl',
        resolve:{
          sessions: ['LoadService',
            function (LoadService) {
              return LoadService.getList()
                .then(function (list) {
                  return list.lectures;
                });
            }]
        }
      })

      .state('home.sessionDetails', {
        url: 'session/{sessionId}',
        templateUrl: 'snippets/session.template.html',
        controller: 'SessionController as ctrl'
      });
  }

}());
