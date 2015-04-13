'use strict';

/**
 * @ngdoc function
 * @name travyUralaApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the travyUralaApp
 */
angular.module('travyUralaApp')
  .controller('MainCtrl', function ($scope, herbalList, $modal, $log) {
    $scope.herbalList = herbalList.getData();

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
