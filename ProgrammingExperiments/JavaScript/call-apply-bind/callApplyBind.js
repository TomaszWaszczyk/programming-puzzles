// call and apply function
// https://www.youtube.com/watch?v=c0mLRpw-9rI
var obj = {num: 2};
var obj2 = {num:5};

var addToThis = function(a, b, c){

    return this.num + a + b + c;
};

console.log(addToThis.call(obj, 1, 2, 3));

var arr = [1,2,3];

console.log(addToThis.apply(obj, arr));

// difference between call and apply: apply is for array of arguments
// end of call function
// .. but bind is different..

var arr = [1,2,3];
console.log(addToThis.apply(obj, arr));
console.log(addToThis.apply(obj2, arr));


// lets play with bind:

console.log(addToThis.bind(obj, arr)); // returns a function

var bound = addToThis.bind(obj);
console.dir(bound);

console.log(bound(1,2,3));