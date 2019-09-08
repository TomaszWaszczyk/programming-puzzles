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
<<<<<<< HEAD
var a = ['one', 'two', 'three'];
var b = ['one', 'two', 'three'];
(a === b)

// 15
const cars = [
  'Mazda', 
  'Ford', 
  'Renault', 
  'Opel', 
  'Mazda'
]
const uniqueWithArrayFrom = Array.from(new Set(cars));
console.log(uniqueWithArrayFrom); // outputs ["Mazda", "Ford", "Renault", "Opel"]

const uniqueWithSpreadOperator = [...new Set(cars)];
console.log(uniqueWithSpreadOperator);// outputs ["Mazda", "Ford", "Renault", "Opel"]

// 16 - merging objects
const product = { name: 'Milk', packaging: 'Plastic', price: '5$' }
const manufacturer = { name: 'Company Name', address: 'The Company Address' }

const productManufacturer = { ...product, ...manufacturer };
console.log(productManufacturer); 
// outputs { name: "Company Name", packaging: "Plastic", price: "5$", address: "The Company Address" }

// merging an array of objects into one
const cities = [
    { name: 'Paris', visited: 'no' },
    { name: 'Lyon', visited: 'no' },
    { name: 'Marseille', visited: 'yes' },
    { name: 'Rome', visited: 'yes' },
    { name: 'Milan', visited: 'no' },
    { name: 'Palermo', visited: 'yes' },
    { name: 'Genoa', visited: 'yes' },
    { name: 'Berlin', visited: 'no' },
    { name: 'Hamburg', visited: 'yes' },
    { name: 'New York', visited: 'yes' }
];

const result = cities.reduce((accumulator, item) => {
  return {
    ...accumulator,
    [item.name]: item.visited
  }
}, {});

console.log(result);
=======
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


// 21
// What is Tagged Template Literals? 

// 22
const ab = { a : 1, b : 2, c : 3};
const {a, a : b, c, ...d} = ab;
a = ?
b = ?
c = ?
d = ?
  
  
// 23
f = (a = 1, b= 2, c=3) =>
  console.log(a,b,c)

f(undefined, null)


// 24
// div vs span


// 25
const nums = [1,2,3].push(4);
console.log(nums)
>>>>>>> bcbc27ee36aeeda6714b7b1c15d847ab38a5fbf2
