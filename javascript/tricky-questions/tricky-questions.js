// 1. https://stackoverflow.com/questions/48270127/can-a-1-a-2-a-3-ever-evaluate-to-true
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness#Loose_equality_using

// const a = {
//     i: 1,
//     toString: function () {
//         return a.i++;
//     }
// };
//
// if(a == 1 && a == 2 && a == 3) {
//     console.log('Hello World!');
// }


// 2. Fancy filling of zeros
//{{("00000"+1).slice(-6)}}      // '000001'
//{{("00000"+123456).slice(-6)}} // '123456'


// 3. Reverse a string

// "Reverse a string".split("").reverse().join("");
//
// // 4. Length on object
//
// var foo = {};
// foo.bar = 'hello';
//
// console.log(foo.length);


// 5. Hello world

var foo = "Hello";
(function () {
    var bar = " World";

    alert(foo + bar);
})();

alert(foo + bar);





const a = () => Array(2)
  .fill([108, 105, 102, 101, 32].map(e => String.fromCharCode(e)).join(''))
  .join([105, 115, 32].map(e => String.fromCharCode(e)).join(''))
  .concat(
    Array(6)
    .join("a" -1)
    .replace(/aN/g, "a")
  )


  console.log(a())
