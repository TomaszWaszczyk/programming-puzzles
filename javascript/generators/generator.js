function* myGenerator() {
    var array = [1, 2];
  
    while (array.length) {
      yield array.shift();
    }
  }
  
  var generator = myGenerator();
  console.log(generator.next()); // { value: 1, done: false }
  console.log(generator.next()); // { value: 2, done: false }
  console.log(generator.next()); // { value: undefined, done: true }
  