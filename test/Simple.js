var requirejs = require("requirejs");
var assert = require("assert");
var should = require("should");
requirejs.config({
	baseUrl: 'dev/js',
	nodeRequire: require
});

describe('Simple module', function(){
	var simple;
	before(function(done) {
		requirejs(['Simple'], function(Simple) {
			simple = Simple;
			done();
		});
	});
	
	describe('should have simple aritmetic functions', function() {
		it('should have an "add" function', function() {
			simple.should.have.property('add');
		});
		it('should have a "sub" function', function() {
			simple.should.have.property('sub');
		});
		it('should have a "mul" function', function() {
			simple.should.have.property('mul');
		});
		it('should have a "div" function', function() {
			simple.should.have.property('div');
		});
	});
});