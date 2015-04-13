'use strict';

/**
 * @ngdoc function
 * @name travyUralaApp.controller:BalsamsCtrl
 * @description
 * # BalsamsCtrl
 * Controller of the travyUralaApp
 */
angular.module('travyUralaApp')
  .controller('BalsamsCtrl', function ($scope, balsamList, $modal, $log) {
    $scope.herbalList = balsamList.getData();

    $scope.showDetails = function(herbal) {
      var modalInstance = $modal.open({
        templateUrl: 'views/herbalmodal.html',
        controller: 'HerbalmodalCtrl',
        size: 'lg',
        resolve: {
          herbal: function () {
            return herbal;
          }
        }
      });

      modalInstance.result.then(function (selectedItem) {
        $scope.selected = selectedItem;
      }, function () {
        $log.info('Modal dismissed at: ' + new Date());
      });
    };
  });
