'use strict';

describe('Controller: BalsamsCtrl', function () {

  // load the controller's module
  beforeEach(module('travyUralaApp'));

  var BalsamsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    BalsamsCtrl = $controller('BalsamsCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
