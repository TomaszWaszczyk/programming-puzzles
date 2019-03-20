function add(x) {
    return function (y) {
        return y + x;
    }
}

let addTwo = add(2);
console.log(addTwo)
console.log(addTwo(3))

// Compound function
const add = x => y => y + x;
