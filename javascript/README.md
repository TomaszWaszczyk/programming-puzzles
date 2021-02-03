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

1. We define the I operator as the function I(x,y)=(1+x+y)2+y−x and I-expressions as arithmetic expressions built only from variables names and applications of I. A variable name may consist of one or more letters. For example, the three expressions x, I(x,y), and I(I(x,ab),x) are all I-expressions.
For two I-expressions e1 and e2 such that the equation e1=e2 has a solution in non-negative integers, we define the least simultaneous value of e1 and e2 to be the minimum value taken by e1 and e2 on such a solution. If the equation e1=e2 has no solution in non-negative integers, we define the least simultaneous value of e1 and e2 to be 0. For example, consider the following three I-expressions: A=I(x,I(z,t))B=I(I(y,z),y)C=I(I(x,z),y) The least simultaneous value of A and B is 23, attained for x=3,y=1,z=t=0. On the other hand, A=C has no solutions in non-negative integers, so the least simultaneous value of A and C is 0. The total sum of least simultaneous pairs made of I-expressions from {A,B,C} is 26.
Find the sum of least simultaneous values of all I-expressions pairs made of distinct expressions from file I-expressions.txt (pairs (e1,e2) and (e2,e1) are considered to be identical). Give the last nine digits of the result as the answer.

---

https://github.com/macbem/10CloudsCodingTask
https://www.edureka.co/blog/interview-questions/react-interview-questions/

---

1. When comparing use === instead of ==2. Never use var use let instead3. Use const instead of let4. Always use semicolons (;)5. Naming conventions in JavaScript6. Use template literals when contacting strings7. Use ES6 arrow function where possible8. Always use curly braces around control structures9. Also, make sure in JavaScript that the curly brace starts on the same line with space in between.10. Try and reduce nesting11. Try and come up with a “max” line length for files and functions12. Lowercase file names13. Use default parameters where possible14. Switch statements should use break and have default15. Use named exports16. Do not use wildcard imports17. Use shortcuts for Booleans18. Try and avoid unneeded ternary statements19. Only use one variable per declaration

---

Implementing a debounce from scratch is a common interview question. It tests your understanding of intermediate and advanced JavaScript concepts such as: async programming, callbacks, scope, and closures. It is also a practical solution used in real-world applications to improve performance and demonstrates that you understand the tools to write good code for real users.

memoization javscript

---

Bug #1
```
function createPopups(accessKey, text, relatedFieldId) {
  var formField = relatedFieldId !== "#" ? relatedFieldId : null;
  
  if (accessKey && text === accessKey) {
    createPopup("label", accessKey);
  }

  addAccessKeyPopupFormFields(formField[0]);
}

```
Answer (line 8)

Look at the last line of the function: we are accessing an element with index zero on formField. This variable is initialised with either relatedFieldId or null. In the latter case the index access will crash the execution.
Bug #2

```
function calculateOpenState() {
  var rank = 0;
  var today = new Date();
  var start = new Date(this.dateStarted);
  var end = new Date(this.dateCompleted);

  if (start <= today && today <= end) {
    rank = 5;
  } else {
    if (today < start) {
      rank = 1;
    } else if (today > end) {
      rank = 2;
    } else {
      rank = 3;
    }
  }
  return { state: STATES[rank], rank: rank };
}

```
Answer (line 15)

The code rank = 3; is never executed as the condition on line 12 today > end is always evaluates to true.
Bug #3

```
function roundMinAndMax(max, min, units, roundingUnit) {
  if (this.alwaysShowZero()) {
    max = 0;
    if (this.useIntegers()) {
      Math.ceil(roundingUnit);
      min = max - roundingUnit * units;
    } else {
      min = max - Math.ceil(roundingUnit * units * 100000) / 100000;
    }
  }
  this.dataMaximum = max;
  this.dataMinimum = min;
}

```
Answer (line 5)

Look at Math.ceil, it’s used 2 times in this function, but one time the return value is not used.
Bug #4

```
function hideAll(name, config) {
  if (name && Y.Transition) {
    if (typeof config === "function") {
      config = null;
    }

    if (!name.push) {
      if (typeof config === "function") {
        config = name;
      }
      name = "HIDE_TRANSITION";
    }
    this.transition(name, config);
  } else {
    this.hide();
  }
  return this;
}

```
Answer (line 9)

The second time we evaluate a condition typeof config === ‘function’(line 8), this condition will be always false, as on line 3 there is the same check, and when it’s true the value of config changed to null. That way we have a dead code at line 9.
Bug #5

```
function comparator(a, b) {
  var aLastAccessTime = a.get("lastAccessTime");
  var bLastAccessTime = b.get("lastAccessTime");
  if (aLastAccessTime !== bLastAccessTime) {
    return bLastAccessTime - aLastAccessTime;
  } else if (aLastAccessTime && !bLastAccessTime) {
    return -1;
  } else if (!aLastAccessTime && bLastAccessTime) {
    return 1;
  }
  return 0;
}

```
Answer (lines 7 and 9)


Both conditions aLastAccessTime && !bLastAccessTime and !aLastAccessTime && bLastAccessTime are never true and a code next to them is never executed. We reach these conditions only if the first condition aLastAccessTime !== bLastAccessTime is false, thus aLastAccessTime and bLastAccessTime are strictly equal.

---

!!!!!!!!!!! https://stackoverflow.com/jobs/251072/cryptoeconomic-software-engineer-chorus-one?med=clc
https://stackoverflow.com/jobs/266624/backend-developer-nodejs-male-female-diverse-akelius-gmbh
https://stackoverflow.com/jobs/274390/react-engineer-building-real-time-user-interface-goldman-sachs


https://stackoverflow.com/jobs/277612/react-developer-remote-x-team
https://www.toptal.com/react/interview-questions
http://www.geeksforgeeks.org/amazon-interview-experience-set-169-sde-2/
http://www.geeksforgeeks.org/job-sequencing-problem-set-1-greedy-algorithm/

Co zrobić żeby frontend nie miał klucza - zrobić serwer proxy który te klucze będzie mieć API


https://tylermcginnis.com/react-interview-questions/
https://github.com/Applifier/web-frontend-test
https://spin.atomicobject.com/2016/02/16/how-javascript-promises-work/
https://github.com/viraptor/reverse-interview
https://github.com/jwasham/coding-interview-university


https://www.incapptic.com/careers


curring java script
```
shurtcuts code refactoring
```
https://www.edureka.co/blog/interview-questions/react-interview-questions/

---

https://github.com/MaximAbramchuck/awesome-interview-questions
https://dev.to/aershov24/7-hardest-nodejs-interview-questions--answers-3lje
https://github.com/xsolve-pl/react-recruitment-app

https://github.com/ritave/Lunyr-Recuitment
https://kariera.coi.gov.pl/pl/programista-front-end,ja,201
https://www.fullstack.cafe/JavaScript
https://www.fullstack.cafe/blog/advanced-javascript-interview-questions
https://www.fullstack.cafe/blog/javascript-es6-es2015-interview-questions
https://www.fullstack.cafe/blog/20-typescript-interview-questions-and-answers-in-2018
Event loop, next tick, SQL, prototypy, var, let, process, nadpisywanie require, asynchronicznność, mikroserwisy, design patterns, singleton w JS, observer - publisher, event cuptering, 
https://medium.com/javascript-scene/10-interview-questions-every-javascript-developer-should-know-6fa6bdf5ad95

nexttick+nodejs process nexttick
let var in for
forEach, map, reduce, filter
throttling debounce
Zaawansowany JavaScript - #1/4 Execution Context

---

Podstawy działania strumieni
1. ObservableObserverSubscriptionCallback vs Promise vs Observable
2. Tworzenie strumieni
   Własny strumień: new Observable((oserver) => {})Wbudowane kreatory strumieni: of, from, fromEvent, timer…
3. Jak działają operatory
   Użycie metody pipe()Podstawowe operatory: map, filter, reduce, switchMap
4. Observable i Observer w jednym
   SubjectBehavior SubjectReplay Subject
5. MultiCasting
   Cold i Hot ObservableOperatory publish, share, multicast
6. Praktyczne zastosowanie operatorów.
   debounceTimemergedelayswitchMaptakeUntil

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
