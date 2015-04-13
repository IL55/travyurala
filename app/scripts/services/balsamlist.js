'use strict';

/**
 * @ngdoc service
 * @name travyUralaApp.balsamList
 * @description
 * # balsamList
 * Service in the travyUralaApp.
 */
angular.module('travyUralaApp')
  .service('balsamList', function () {
    // AngularJS will instantiate a singleton by calling "new" on this function
    var herbalList = [
      {
        image: '100672758_maslo_kedrovoe.jpg',
        name: 'Масло кедровое',
        detail: 'Масло кедрового ореха серии «Алтай» от компании «Специалист»',
        templateUrl: 'views/maslokedrovoe.html'
      },

      {
        image: '4ebe15b85f745.jpg',
        name: 'Живичный бальзам «Кедровый»',
        detail: 'Живичный бальзам',
        templateUrl: 'views/zivicnyjbalzam.html'
      }
    ];

    var getData = function() {
      return herbalList;
    };

    return {
      getData: getData
    };
  });
