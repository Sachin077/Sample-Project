/* jslint node:true */

'use strict';

var expect = require('chai').expect,
	fs = require('fs');

describe('node_mocha task Unit test', function () {
	it('should check for coverage folder exists', function (done) {
		expect(true).to.be.ok;
		// check if 'coverage' folder is generated
		fs.exists(__dirname + '/../coverage', function(exists){
			if (exists){
				expect(true).to.be.ok;
			} else {
				expect(false).to.be.ok;
			}
			done();
		});
	});
});