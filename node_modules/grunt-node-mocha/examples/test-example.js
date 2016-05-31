/* jslint node:true */

'use strict';

var expect = require('chai').expect;

describe('Test Example', function () {
	it('should say hello', function () {
		expect('hello').to.match(/hello/);
		var example = require(__dirname + '/example.js');
		expect(example.sayHello()).to.equal("hello");
	});
});