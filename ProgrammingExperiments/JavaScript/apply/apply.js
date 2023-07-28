var curry = function(fun) {

  // nothing to curry. return function
  if (arguments.length > 1) {
    return this;
  }

  // Create an array with the functions arguments
  var args = Array.prototype.slice.call(arguments, 1);
  return function() {

    // *Apply* fn with fn's arguments
    return fun.apply(this, args.concat(Array.prototype.slice.call(arguments, 0)));
  };
};

// Creating function that already predefines adding 1 to a
function addOneToNumber(a) {
  console.log(1 + a);
}

// addOneCurried is of function
var addOneCurried = curry(addOneToNumber);
console.log(addOneCurried(10)); // 11