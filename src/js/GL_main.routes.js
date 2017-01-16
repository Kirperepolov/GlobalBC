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
        templateUrl: 'snippets/home.template.html'
      })

      .state('basics', {
        url: '/basics',
        templateUrl: 'snippets/session.template.html',
        controller: 'MainController as ctrl'
      })

      .state('functions', {
        url: '/functions',
        templateUrl: 'snippets/session.template.html',
        controller: 'MainController as ctrl'
      })

      .state('objects', {
        url: '/objects',
        templateUrl: 'snippets/session.template.html',
        controller: 'MainController as ctrl'
      });
  }

}());
