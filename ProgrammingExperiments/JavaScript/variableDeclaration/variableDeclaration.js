// http://james.padolsey.com/javascript/truthy-falsey/
// https://teamtreehouse.com/community/what-does-mean-in-javascript-in-a-variable-declaration-example-var-variable-a-b

// Truthy
// var newGallery = 1;
// var current = newGallery || 'false';
//
// console.log('Current is:', current);




// Falsey
var newGallery = 0;
var current = newGallery || 'false';
console.log('Current is:', current); // Alert returns false


// var defaultValue = 3;
// var newValue = oldValue || defaultValue;
// console.log(newValue);