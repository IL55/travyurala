'use strict';

/**
 * @ngdoc overview
 * @name travyUralaApp
 * @description
 * # travyUralaApp
 *
 * Main module of the application.
 */
angular
  .module('travyUralaApp', [
    'ngRoute',
    'ui.bootstrap'
  ])
  .config(function ($routeProvider) {


    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/balsams', {
        templateUrl: 'views/balsams.html',
        controller: 'BalsamsCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
