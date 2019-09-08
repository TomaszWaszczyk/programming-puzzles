// By @coderitual
// https://twitter.com/coderitual/status/1112297299307384833

//  Remove any duplicates from an array of primitives.
const unique = [...new Set(arr)]

// Sleep in async functions. Use: await sleep(2000).
const sleep = (ms) => (new Promise(resolve => setTimeout(resolve, ms)));

// Type this in your code to break chrome debugger in that line.
debugger;

// Just plain english.
[...].every(Number.isFinite);

// Returns all non-falsy values from an array.
[...].filter(Boolean)

// Array destructuring to see matching elements.
let [r, g, b, a] = [255, 0, 0, 255];

// Object destructuring to reduce multiple lines of code to a single line.
let {width, height} = resolution;

// Gets an item from the list and wraps around to the start if n is larger than the list.
items[n % items.length]

// Console.log in array function without adding curly braces.
const addFortyTwo = number => console.log(number) || number + 42

// Same as above
const add42 = n => (console.log(n), n + 42);

// Log variables with names. I love this trick with object ❤️
console.log({ a, b, c, d, e});

// Random hex color
'#'+(~~(Math.random()*0xffffff)).toString(16).padEnd(6,0)

// We love Javascript that's why instead of Math.floor we use
// Note: Use with caution, it won't work for big (>32bit) or negative numbers
~~anyNumber