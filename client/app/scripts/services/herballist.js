'use strict';

/**
 * @ngdoc service
 * @name travyUralaApp.herbalList
 * @description
 * # herbalList
 * Service in the travyUralaApp.
 */
angular.module('travyUralaApp')
  .service('herbalList', function () {
    // AngularJS will instantiate a singleton by calling "new" on this function
    var herbalList = [
      {
        image: '1395596740.jpg',
        name: 'Анис обыкновенный',
        detail: 'Семейство сельдереевые (Apiaceae) или зонтичные (Umbelliferae)',
        templateUrl: 'views/anis.html'
      },

      {
        image: '78b1191c78428a7.jpg',
        name: 'Аралия (корень)',
        detail: 'аралия высокая, шип-дерево, чертово дерево',
        templateUrl: 'views/aralia.html'
      }
    ];

    var getData = function() {
      return herbalList;
    };

    return {
      getData: getData
    };
  });
