// 1. Clearing array
// http://2ality.com/2012/12/clear-array.html
// http://2ality.com/2012/12/arrays.html
var fruitBasket = {
    _fruits: [ 'Apple', 'Orange' ],
    getFruits: function () {
        return this._fruits;
    }
};


var thingsIHaveEaten = fruitBasket.getFruits();  // (*)
thingsIHaveEaten.push('Cheese');
console.log('Things I have eaten: '+thingsIHaveEaten);


// In order to clean an array:
//     myArray.length = 0;
// If the value of myArray is shared and all participants have to see the effect of clearing then this
// is the approach you need to take. However, JavaScript semantics dictate that, if you decrease the length
// of an array, all elements at the new length and above have to be deleted [1]. And that costs time
// (unless an engine has an optimization for the special case of setting a length to zero). Indeed, a performance
// test (mentioned by Kris Zyp) shows that the previous way of clearing is faster on all current JavaScript engines.

// Emptying an array is a common JavaScript task but too often I see the task performed in the incorrect way.
// Many times developers will create a new array:
//
// myArray = []; // bad
//
// That isn't the optimal way to get a fresh array;  to truncate an array, and thus empty it, you should set ' +
// 'the length property to zero:
//
//
// myArray.length = 0; // good!
//
