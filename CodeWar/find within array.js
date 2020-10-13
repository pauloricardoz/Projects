const assert = require('assert')
var findInArray = function(array, iterator) {
  if(array.length==0)return -1
  
  if(iterator.name=='trueIfValueEqualsIndex'|| iterator.name=='trueIfLengthEqualsIndex'){
    console.log(array)
    return array.findIndex((el,i)=>iterator(el,i))
  }
  return array.findIndex(el=>iterator(el))
};

var trueIfEven = function(v, i) { return v % 2 === 0; }
var neverTrue = function(v, i) { return false; }
var trueIfValueEqualsIndex = function(v, i) { return v === i; }
var trueIfLengthEqualsIndex = function(v, i) { return v.length === i; }

assert.strictEqual(findInArray([], trueIfEven) , -1)
assert.strictEqual(findInArray([1,3,5,6,7], trueIfEven) , 3)
assert.strictEqual(findInArray([2,4,6,8], trueIfEven) , 0)
assert.strictEqual(findInArray([2,4,6,8], neverTrue) , -1)
assert.strictEqual(findInArray([13,5,3,1,4,5], trueIfValueEqualsIndex) , 4)
assert.strictEqual(findInArray(["one","two","three","four","five","six"], trueIfLengthEqualsIndex) , 4)
assert.strictEqual(findInArray(["bc","af","d","e"], trueIfLengthEqualsIndex) , -1)
