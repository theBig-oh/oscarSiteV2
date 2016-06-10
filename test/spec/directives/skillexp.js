'use strict';

describe('Directive: skillExp', function () {

  // load the directive's module
  beforeEach(module('oscarSiteV2App'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<skill-exp></skill-exp>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the skillExp directive');
  }));
});
