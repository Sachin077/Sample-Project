/// <reference path="users.ts" />
/// <reference path="../node_modules/typescript/lib/lib.es6.d.ts" />
/// <reference path="typings/index.d.ts" />
"use strict";

describe('DOM tests', function() {
  var formElem = document.forms[0];
 
  it('Form exists in the DOM', function() {
    expect(formElem).to.not.equal(null);
  });
 
  it('Input field should be set to type text ', function() {
    expect(formElem.firstname.getAttribute('type')).to.equal('text');
  });

  it('should call some function', function(){
    expect(formElem.firstname.getAttribute('value').to.equal(null));
  })
});