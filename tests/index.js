var expect = require('chai').expect;
var easyid = require('../');

describe('ID module', function() {
    describe('Module returns a valid id', function() {
        it('should match the regex', function() {
          expect(easyid.generate()).to.match(/^[0-9a-z]{24}$/);
        });
    });
});
