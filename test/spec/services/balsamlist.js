'use strict';

describe('Service: balsamList', function () {

  // load the service's module
  beforeEach(module('travyUralaApp'));

  // instantiate service
  var balsamList;
  beforeEach(inject(function (_balsamList_) {
    balsamList = _balsamList_;
  }));

  it('should do something', function () {
    expect(!!balsamList).toBe(true);
  });

});
