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

// 10

