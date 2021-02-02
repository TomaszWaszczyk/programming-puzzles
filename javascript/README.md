# JavaScriptCoding

Notes and experiments with JavaScript

https://code-cartoons.com/a-cartoon-intro-to-redux-3afb775501a6 - Redux in pictures

http://jsben.ch/browse

https://davidwalsh.name/empty-array

!!!! https://github.com/getify/You-Dont-Know-JS

https://stackoverflow.com/tags/javascript/info

http://callbackhell.com/

https://github.com/azat-co/cheatsheets/tree/master/es6

https://codesandbox.io


## Clean code

!!! StandardJS https://github.com/standard/standard

https://github.com/ryanmcdermott/clean-code-javascript

https://github.com/rwaldron/idiomatic.js/

https://the-awwwesomes.gitbooks.io/html-css-step-by-step/content/pl/index.html

Benchmarks: http://jsben.ch ; https://jsperf.com/fast-array-foreach

https://flow.org/

! ! ! ! https://github.com/shri/JSDoc-Style-Guide https://stackoverflow.com/questions/6460604/how-to-describe-object-arguments-in-jsdoc

# Design patterns

https://yetanotherwannabedev.github.io

http://rxmarbles.com/#interval

https://github.com/i0natan/nodebestpractices



---

Komunikacja synchroniczna jest wtedy gdy gdy wysyłam informację i spodziewam się informacji o jej dostarczeniu przez klienta i przetwarzam dalej

Komunikacja asynchroniczna- zbieram paczkę informacji i je przetwarzam ale nie zatrzymuję procesu przetwarzania na produkcji

1. Co będzie wyświetlone w konsoli?

function test(a,b){

  a += " i costam";

  

  b.second = "2";

  

  return a;

}

var a = "costam";

var b = {first: "1"};

console.log(a,b);

test(a,b);

console.log(a,b);

2. Kolejność w konsoli?

console.log(1);

setTimeout(function(){console.log(2)}, 1000);

setTimeout(function(){console.log(3)}, 0);
console.log(4);

---


# Closure

https://medium.freecodecamp.com/lets-learn-javascript-closures-66feb44f6a44#.i41pdefx5

# Visual JS

https://github.com/hex13/javascript-visual-explanations


## Links:

http://jsfiddle.net/user/dashboard/ - pantarheipl

http://jsbin.com/vadefu/1/edit?html,js,output - TomaszWaszczyk
