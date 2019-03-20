this.globalVar1 = {
    myGlobalVarsMethod: function (){
        // Implementation
    }
};

console.log(this.globalVar1); // { myGlobalVarsMethod: [Function] }


console.log("====================================================");

this.globalVariable = 'globalVariable';
function globalFunction (){
    this.innerVariable = 'innerVariable';
    console.log(this.globalVariable === undefined); // true
    console.log(this.innerVariable === 'innerVariable'); // true
    return {
        innerFunction: function () {
            console.log(this.globalVariable === undefined); // true
            console.log(this.innerVariable === undefined); // true
        }
    }
}

globalFunction().innerFunction();
console.log("====================================================");

this.globalVar = 'globalVar';

function nonStrictFunctionTest () {
    return function () {
        console.log(this.globalVar); // undefined
    }
}

function strictFunctionTest () {
    'use strict'; // Strict Mode
    return function () {
        console.log(this.globalVar); // TypeError: Cannot read property 'globalVar' of undefined
    }
}

nonStrictFunctionTest()();
strictFunctionTest()();


