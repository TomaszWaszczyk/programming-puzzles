//1
function cb(){
  console.log('Processed in next iteration');
}
process.nextTick(cb);
console.log('Processed in the first iteration');


// 2
console.log.call.apply(a => a, [1,2])
