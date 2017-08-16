//Warmup Today:
//Write a function that takes a single string as the input then return the number of vowels the string contains. Do not count “y” as a vowel.

// Use mocha and chia to write tests to make sure your code works.
// * mocha and chai are listed as devDependencies in package.json
// * Tests are in the test folder
// * The describe descriptions show the function name and/or context
// * The it descriptions read like a sentence
// * Tests cover at least one base case, and one empty/edge case

//Submit in Learn under Exercises “Q4W2.1 Write Tests”

const chai = require('chai');
const assert = chai.assert;
const vowelCount = require('../main.js');

describe('vowelCount', function() {
  it('Should return "Please input a string" if value passed is not a string', function() {
    assert.equal('Please input a string', vowelCount([]));
    assert.equal('Please input a string', vowelCount({}));
    assert.equal('Please input a string', vowelCount(1));
    assert.equal('Please input a string', vowelCount(true));
    assert.equal('Please input a string', vowelCount(''));
  });
  it('Should return the correct number of vowels as an object', function() {
    assert.deepEqual({a : 1, e: 1, i: 1, o: 1, u: 1}, vowelCount('AeIoU'));
    assert.deepEqual({u: 1, o: 1, i: 1, e: 1, a: 1}, vowelCount('uOiEa'));
    assert.deepEqual({e: 5, o: 1, a: 1}, vowelCount('The dog ate cheese'));
    assert.deepEqual({e: 4, o: 3, u: 2}, vowelCount('There should be no "y" counted!'));
  });
  it('Should return an empty object if there are no vowels', function() {
    assert.deepEqual({}, vowelCount('bbbbbbb'));
    assert.deepEqual({}, vowelCount('yy'));
  });
});
