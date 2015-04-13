'use strict';

describe('Service: herbalList', function () {

  // load the service's module
  beforeEach(module('travyUralaApp'));

  // instantiate service
  var herbalList;
  beforeEach(inject(function (_herbalList_) {
    herbalList = _herbalList_;
  }));

  it('should do something', function () {
    expect(!!herbalList).toBe(true);
  });

});
