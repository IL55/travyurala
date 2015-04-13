'use strict';

/**
 * @ngdoc function
 * @name travyUralaApp.controller:HerbalmodalCtrl
 * @description
 * # HerbalmodalCtrl
 * Controller of the travyUralaApp
 */
angular.module('travyUralaApp')
  .controller('HerbalmodalCtrl', function ($scope, $modalInstance, herbal) {

    $scope.getTemplateName = function() {
      return herbal.templateUrl;
    };

    $scope.closeModal = function() {
      $modalInstance.close();
    };
  });
