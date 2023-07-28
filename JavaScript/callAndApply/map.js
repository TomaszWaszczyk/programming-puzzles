function Jedi(name) {
    this.name = name;
}

var kit = new Jedi('Kit');
var count = new Jedi('Count');
var mace = new Jedi('Mace');

var jedis = [kit, count, mace];

var lastNames = ['Fisto', 'Dooku', 'Windu', 'Dupa'];

// map
var jedisWithFullNames = jedis.map(function(currentValue, index, array) {
    var clonedJedi = (JSON.parse(JSON.stringify(currentValue))); // Clone currentValue
    console.log("Cloned JEDI: " + clonedJedi.name);
    console.log(array.join('Dupa2'));
    console.log(array);
    clonedJedi.name = currentValue.name + " " + lastNames[index];
    return clonedJedi;
});

jedisWithFullNames.map(function(currentValue) {
    console.log(currentValue.name);
});

/**
 Output:
 Kit Fisto
 Count Dooku
 Mace Windu
 */