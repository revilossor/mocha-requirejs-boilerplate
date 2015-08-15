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
	
	describe('should have simple aritmetic functions,', function() {
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
	
	describe('arithmetic functions should return the correct values,', function() {
		it('should add correctly when valid arguments are passed', function() {
			(simple.add(1, 1)).should.be.exactly(2).and.be.type('number');
		});
		it('should subtract correctly when valid arguments are passed', function() {
			(simple.sub(2, 1)).should.be.exactly(1).and.be.type('number');
		});
		it('should multiply correctly when valid arguments are passed', function() {
			(simple.mul(2, 2)).should.be.exactly(4).and.be.type('number');
		});
		it('should add divide when valid arguments are passed', function() {
			(simple.div(4, 2)).should.be.exactly(2).and.be.type('number');
		});
		
		it('add should throw an appropriate error if either argument is invalid', function() {
			simple.add.bind(null, 1, 'a').should.throw('"a" is not a valid argument to add');
			simple.add.bind(null, 'a', 1).should.throw('"a" is not a valid argument to add');
			simple.add.bind(null, 'a', 'a').should.throw('"a" is not a valid argument to add');
		});
		it('sub should throw an appropriate error if either argument is invalid', function() {
			simple.sub.bind(null, 1, 'a').should.throw('"a" is not a valid argument to sub');
			simple.sub.bind(null, 'a', 1).should.throw('"a" is not a valid argument to sub');
			simple.sub.bind(null, 'a', 'a').should.throw('"a" is not a valid argument to sub');
		});
		it('mul should throw an appropriate error if either argument is invalid', function() {
			simple.mul.bind(null, 1, 'a').should.throw('"a" is not a valid argument to mul');
			simple.mul.bind(null, 'a', 1).should.throw('"a" is not a valid argument to mul');
			simple.mul.bind(null, 'a', 'a').should.throw('"a" is not a valid argument to mul');
		});
		it('div should throw an appropriate error if either argument is invalid', function() {
			simple.div.bind(null, 1, 'a').should.throw('"a" is not a valid argument to div');
			simple.div.bind(null, 'a', 1).should.throw('"a" is not a valid argument to div');
			simple.div.bind(null, 'a', 'a').should.throw('"a" is not a valid argument to div');
		});
	});	
});