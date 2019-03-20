// Filter's implementation
Array.prototype.filter = function(fun, thisArg) {
    if(typeof fun !== 'function') {
        throw new Error("The first argument must be of type function");
    }
    var arr = [];
    thisArg = (thisArg) ? thisArg : this;

    thisArg.forEach(function(element) {
        if (fun.call(thisArg, element)) {
            arr[arr.length] = element;
        }
    });
    return arr;
};

function Person(name, side) {
    this.name = name;
    this.side = side;
}

var hanSolo = new Person('Han Solo','Rebels');
var bobaFett = new Person('Boba Fett','Empire');
var princessLeia = new Person('Princess Leia', 'Rebels');

var people = [hanSolo, bobaFett, princessLeia];

var enemies = people.filter(function (currentValue, index, array) {
        return currentValue.side === 'Empire';
    })
    .map(function(currentValue) {
        console.log(currentValue.name + " fights for the " + currentValue.side + ".");
    });

/**
 Output:
 Boba Fett fights for the Empire.
 */