// https://github.com/denysdovhan/wtfjs
// 0
-!~ -~1 

// 1
function cb(){
  console.log('Processed in next iteration');
}
process.nextTick(cb);
console.log('Processed in the first iteration');


// 2
console.log.call.apply(a => a, [1,2])

// 3 - What will happen and how to fix it. ;-)
const arr = ['a', 'b', 'c', 'd'];
for (var i = 0; i < arr.length; i++) {
  setTimeout(function() {
    console.log(`Index : ${i}, element: ${arr[i]}`)
  }, 1000);
}

// 4
parseInt('101',2) << 2


// 5
console.log(typeof typeof 1)


// 6
'ababab'.split('').map((c,i,a) => ~c.indexOf(a[-~1] -- ~1).filter((c,i,a) => a[-~i] == c)

                       
// 7
(! + [] + [] + ([] + [] === "") + (Math.max() === -Infinity )).length === 12

                       
// 8
let output = (function(x) {
  delete x;
  return x;
})(0);


// 9
Array(16).join( 'hero'-1) + "Batman";


// 10 - parseFloat works great but parseInt..
['06','08','10','12','14'].map(parseInt)


// 11
var generator = function*(a,b) {
    while (true) {
        yield a+b;
        yield a*b ;
        yield 3;
    yield null;
    b=2
    yield a+b;
    }
};
var iterable = generator(2,5);
for (let x of iterable) {
    if (x === 4) break;
    console.log(x)
}


// 12
[1,2] + [3,4] // typeof ([1,2]+[3,4])


// 13
let array = [[]]
array.length = ?


// 14
var x = '5' + 2
var y = '5' - 2


// 15
interface X {
  a: number
  b: string
}

type X = {
  a: number
  b: string
};


// 16
(61453).toString(16)


// 17
const obj1 = { firstName: 'Foo', age: 22 };
const obj2 = { lastName: 'Bar', gender: 'M' };
const newObj = { ...obj1, ...obj2, planet: 'Earth' };
console.log(newObj)
// { firstName: 'Foo', age: 22, lastName: 'Bar', gender: 'M', planet: 'Earth' }


// 18 - https://codeburst.io/a-simple-guide-to-destructuring-and-es6-spread-operator-e02212af5831
const address = [221, 'Baker Street', 'London'];
const [ houseNo, , city ] = address;
console.log(houseNo, city)
// 221 'London'


// 19
const numbers = [1, 2, 3];
const [ firstNumber, ...restOfTheNumbers ] = numbers;
console.log(firstNumber, restOfTheNumbers);
// 1 [ 2, 3 ]


// 20
// https://stackoverflow.com/questions/9384758/what-is-the-execution-context-in-javascript-exactly


