var util = require('util');
var assert = require('assert');
var typeCheck = require('simple-typechecks');
var UNDEFINED_VALUE;
var be = {};

be.aFalse = function(a, opt_b) {
  var hasMsg = arguments.length === 2;
  var val = hasMsg ? opt_b : a;
  var comment = hasMsg ? a : util.format('%s was supposed to be false', val);
  assert.strictEqual(val, false, comment);
};

be.aTrue = function(a, opt_b) {
  var hasMsg = arguments.length === 2;
  var val = hasMsg ? opt_b : a;
  var comment = hasMsg ? a : util.format('%s was supposed to be true', val);
  assert.ok(val, comment);
};

be.aUndefined = function(a, opt_b) {
  var hasMsg = arguments.length === 2;
  var val = hasMsg ? opt_b : a;
  var comment = hasMsg ? a : util.format('%s should be undefined', val);
  assert.ok(val === UNDEFINED_VALUE, comment);
};

be.defined = function(a, opt_b) {
  var hasMsg = arguments.length === 2;
  var val = hasMsg ? opt_b : a;
  var comment = hasMsg ? a : util.format('%s should be defined', val);
  assert.strictEqual(val === UNDEFINED_VALUE, false, comment);
};

be.equal = function(a, b, opt_c) {
  var hasMsg = arguments.length === 3;
  var obj = hasMsg ? b : a;
  var ref = hasMsg ? opt_c : b;
  var comment = hasMsg ? a : util.format('%s and %s should be equal', obj, ref);
  assert.deepEqual(obj, ref, comment);
};

be.roughlyEqual = function(a, b, c, opt_d) {
  var hasMsg = arguments.length === 4;
  var var1 = hasMsg ? b : a;
  var var2 = hasMsg ? c : b;
  var tolerance = hasMsg ? opt_d : c;
  var comment = hasMsg ? a :
    util.format('%d is more than %d from %d', var1, tolerance, var2);
  assert.ok(Math.abs(var1 - var2) <= tolerance, comment);
};

be.biggerThan = function(a, b, opt_c) {
  var hasMsg = arguments.length === 3;
  var big = hasMsg ? b : a;
  var small = hasMsg ? opt_c : b;
  var comment = hasMsg ? a :
    util.format('%s should be bigger than %s', big, small);
  assert.ok(big > small, comment);
};

be.smallerThan = function(a, b, opt_c) {
  var hasMsg = arguments.length === 3;
  var small = hasMsg ? b : a;
  var big = hasMsg ? opt_c : b;
  var comment = hasMsg ? a :
    util.format('%s should be smaller than %s', small, big);
  assert.ok(big > small, comment);
  assert.ok(small < big, comment);
};

be.anArray = function(a, opt_b) {
  var hasMsg = arguments.length === 2;
  var val = hasMsg ? opt_b : a;
  var comment = hasMsg ? a : util.format('%s should be an array', val);
  assert.ok(typeCheck.isArray(val), comment);
};

be.equalsArrays = function(a, b, opt_c) {
  var hasMsg = arguments.length === 3;
  var obj = hasMsg ? b : a;
  var ref = hasMsg ? opt_c : b;
  var comment = hasMsg ? a :
    util.format('%s and %s should be equal arrays', obj, ref);
  be.anArray(util.format('%s should be an array', obj), obj);
  be.anArray(util.format('%s should be an array', ref), ref);
  assert.deepEqual(obj, ref, comment);
};

be.aString = function(a, opt_b) {
  var hasMsg = arguments.length === 2;
  var val = hasMsg ? opt_b : a;
  var comment = hasMsg ? a : util.format('%s should be a string', val);
  assert.ok(typeCheck.isString(val), comment);
};

be.inString = function(a, b, opt_c) {
  var hasMsg = arguments.length === 3;
  var subS = hasMsg ? b : a;
  var str = hasMsg ? opt_c : b;
  var comment = hasMsg ? a : util.format('%s should be in %s', subS, str);
  assert.ok(str.indexOf(subS) != -1, comment);
};

be.aNumber = function(a, opt_b) {
  var hasMsg = arguments.length === 2;
  var val = hasMsg ? opt_b : a;
  var comment = hasMsg ? a : util.format('%s should be a number', val);
  assert.ok(typeCheck.isNumber(val), comment);
};

be.anInt = function(a, opt_b) {
  var hasMsg = arguments.length === 2;
  var val = hasMsg ? opt_b : a;
  var comment = hasMsg ? a : util.format('%s should be an int', val);
  assert.ok(typeCheck.isInt(val), comment);
};

be.anObject = function(a, opt_b) {
  var hasMsg = arguments.length === 2;
  var val = hasMsg ? opt_b : a;
  var comment = hasMsg ? a : util.format('%s should be an object', val);
  assert.ok(typeCheck.isObject(val), comment);
};

be.equalObjects = function(a, b, opt_c) {
  var hasMsg = arguments.length === 3;
  var obj = hasMsg ? b : a;
  var ref = hasMsg ? opt_c : b;
  var comment = hasMsg ? a :
    util.format('%s and %s should be equal objects', obj, ref);
  be.anObject(util.format('%s should be an object', obj), obj);
  be.anObject(util.format('%s should be an object', ref), ref);
  assert.deepEqual(obj, ref, comment);
};

be.aDate = function(a, opt_b) {
  var hasMsg = arguments.length === 2;
  var val = hasMsg ? opt_b : a;
  var comment = hasMsg ? a : util.format('%s expected to be a date', val);
  assert.ok(typeCheck.isDate(val), comment);
};

be.notNull = function(a, opt_b) {
  var hasMsg = arguments.length === 2;
  var val = hasMsg ? opt_b : a;
  var comment = hasMsg ? a : util.format('%s should not be null', val);
  assert.ok(val !== null, comment);
};

be.aNull = function(a, opt_b) {
  var hasMsg = arguments.length === 2;
  var val = hasMsg ? opt_b : a;
  var comment = hasMsg ? a : util.format('%s should be null', val);
  assert.ok(val === null, comment);
};

be.aNaN = function(a, opt_b) {
  var hasMsg = arguments.length === 2;
  var val = hasMsg ? opt_b : a;
  var comment = hasMsg ? a : util.format('%s should be NaN', val);
  assert.ok(typeCheck.isNaN(val), comment);
};

be.notNaN = function(a, opt_b) {
  var hasMsg = arguments.length === 2;
  var val = hasMsg ? opt_b : a;
  var comment = hasMsg ? a : util.format('%s should NaN', val);
  assert.ok(!typeCheck.isNaN(val), comment);
};

module.exports = be;
