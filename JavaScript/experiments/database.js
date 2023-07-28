// We want to help you to make sure that you are a good fit for the role and created a self-assessment for candidates. 
// If you need more than 10 minutes to answer the following two questions or need a lot of googling, your current JS 
//skills are not sufficient for the role
// 1) Convert the code below using any lib of your choice to be more readable

db.getData((err,data)=>{
 if(err){
  console.log(err)
  return
 }
 data.a = "test"
 data.b = 1111
 db.processData(data,(err,data)=>{
   if(err){
     console.log(err)
     return
 }
 db.saveData((err,data)=>{
  if(err){
   console.log(err)
   return
  }
  console.log("finished")
  })
 })
})

// 2) What is the output of this program and why?
let z = 4153000000000000000 + 99
console.log(z)