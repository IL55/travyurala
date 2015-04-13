'use strict';

describe('Controller: HerbalmodalCtrl', function () {

  // load the controller's module
  beforeEach(module('travyUralaApp'));

  var HerbalmodalCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    HerbalmodalCtrl = $controller('HerbalmodalCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
