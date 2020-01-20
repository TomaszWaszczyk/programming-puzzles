let array = [2,2,3,3,4,4,5,5,1];

let findNotDuplicate = (array) => {
    let a = array.reduce();

    console.log(a)
}

findNotDuplicate()

// const singleNumber = (array) => {
//   let n = null;
//   const occurances = {}
//   let number;
//   let counter = 0;
//   for(let i = 0; i < array.length; i++){
//     const index = array[i]
//     occurances[index] = occurances[index] ? occurances[index] + 1 : 1; 
//   }
  
  
//   Object.keys(occurances).forEach((key) => {
//     if(occurances[key] == 1){
//        n = key;
//     }
//   })
  
//   return n;
// }

// console.log(singleNumber([4,1,2,1,2]))